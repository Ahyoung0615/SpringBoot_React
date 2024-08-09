import React, { useEffect, useState, useRef, useCallback } from 'react';
import JsTreeService from '../service/JsTreeService';
import $ from 'jquery';
import 'jstree';
import axios from 'axios';
import ModalComponent from './ModalComponent';

const JsTreeChat = () => {
  const [jsonData, setJsonData] = useState([]);
  const [choiceArr, setChoiceArr] = useState([]);
  const [show, setShow] = useState(false);
  const treeRef = useRef(null);

  useEffect(() => {
    const jsTreeData = async () => {
      try {
        const jsonData = await JsTreeService.getJsTree();
        setJsonData(jsonData.data);
        console.log("json data: ", jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    jsTreeData();
  }, []);

  useEffect(() => {
    if (show && treeRef.current && jsonData.length > 0) {
      $(treeRef.current).jstree({
        plugins: ["search", "themes", "types", "dnd"],
        core: {
          data: jsonData,
          themes: { dots: false },
          check_callback: true
        }
      });

      $(treeRef.current).on("select_node.jstree", function (e, data) {
        console.log("tree text: ", data.node.original.text);
        console.log(data.node);
        if(data.node.original.parent !== "#"){
            const selectedText = data.node.original.text;
            setChoiceArr((prevChoices) => {
                if(!prevChoices.includes(selectedText)){
                    return [...prevChoices, selectedText];
                }
                return prevChoices;
            });
        }
      });

      // Cleanup on unmount or when modal is closed
      return () => {
        $(treeRef.current).jstree("destroy").off("select_node.jstree");
      };
    }
  }, [jsonData, show]);

  const handleSearch = () => {
    const searchValue = $("#schName").val();
    console.log(searchValue);
    $(treeRef.current).jstree(true).search(searchValue);
  };

  const deleteChoice = (index) => {
    setChoiceArr((prevChoices) => prevChoices.filter((_, i) => i !== index));
  };

  const sendDataToServer = useCallback(async () => {
    if (choiceArr.length > 0) {
        try {
            const res = await axios.post("http://localhost:8090/api/receive-array", choiceArr, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log("server ok: ", res.data);
            setChoiceArr([]);
        } catch (error) {
            console.log("error", error.message);
        }
    } else {
        console.log("빈 요소");
        alert("최소 한 명이상 선택해 주세요");
    }
  }, [choiceArr]);

  const arrChk = () => {
    console.log(choiceArr);
  };

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div>
      <h1>jsTree Example</h1>
      <button onClick={arrChk}>chk</button>
      <button onClick={openModal}>모달팝업</button>
      <ModalComponent 
        open={show} 
        close={closeModal} 
        title="조직도"
        body={
          <>
            <input type="text" id="schName" placeholder="검색" />
            <button onClick={handleSearch}>검색</button>
            <div className='container'>
              <div className='tree-container' ref={treeRef}></div>
              <div className='child'>
                <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                  {choiceArr.map((choice, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                      {choice}
                      <button className='btn' onClick={() => deleteChoice(index)} style={{ marginLeft: '5px' }}>
                        x
                      </button>
                    </li>
                  ))}
                </ul>
                <button onClick={sendDataToServer}>전송</button>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
};

export default JsTreeChat;
