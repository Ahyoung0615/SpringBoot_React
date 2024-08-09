import axios from "axios";

const JSTREE_BASE_URL = "http://localhost:8090/api/";

class JsTreeService{

    getJsTree(){
        return axios.get(JSTREE_BASE_URL + "tree");
    }

    getReactJsTree(){
        return axios.get(JSTREE_BASE_URL + "reactTree");
    }

    getOk(){
        return axios.post(JSTREE_BASE_URL + "receive-array");
    }
}

export default new JsTreeService();