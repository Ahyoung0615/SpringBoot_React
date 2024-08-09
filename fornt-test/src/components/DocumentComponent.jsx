import React from 'react';

const DocumentComponent = () => {

    return (
        <div>
            <div class="container">
        <h1>휴 가 신 청 서</h1>
        
        <table>
            <tr>
                <th colspan="2">결 재</th>
            </tr>
            <tr>
                <td>담당</td>
                <td>상무이사</td>
                <td>전무이사</td>
                <td>사장</td>
            </tr>
        </table>

        <table>
            <tr>
                <th>소속</th>
                <td></td>
            </tr>
            <tr>
                <th>성명</th>
                <td></td>
            </tr>
            <tr>
                <th>직위</th>
                <td></td>
            </tr>
            <tr>
                <th>종류</th>
                <td>□ 년 차 □ 월 차 □ 특 별 □ 기 타</td>
            </tr>
            <tr>
                <th>사유</th>
                <td></td>
            </tr>
            <tr>
                <th>기간</th>
                <td>년 월 일 일간</td>
            </tr>
            <tr>
                <th>비상연락망</th>
                <td></td>
            </tr>
        </table>

        <p class="signature">위와 같이 휴가를 신청하오니 허락하여 주시기 바랍니다.</p>
        
        <p class="signature">
            <span>년</span>
            <span>월</span>
            <span>일</span>
        </p>

        <p class="signature">소속: </p>
        <p class="signature">성명: </p>
    </div>
        </div>
    );
};

export default DocumentComponent;