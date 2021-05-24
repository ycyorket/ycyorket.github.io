function getDate(){
    let date = Date().split(" ");
    let month = {"Jan": "1", "Feb": "2", "Mar": "3", "Apr": "4", "May": "5", "Jun": "6", "Jul": "7", "Aug": "8", "Sep": "9", "Oct": "10", "Nov": "11", "Dec": "12"}
    return " 北京时间 " + date[3] + "年" + month[date[1]] + "月" + date[2] + "日 " + date[4];
}

function blogComment(){
    let remark = document.getElementById("commentText").value;
    let commenter = document.getElementById("commenter").value;
    let idLine = document.getElementById("latestID");
    let remarkLine = document.getElementById("latestRemark");
    if(remark !== ""){
        if(commenter === "")
            idLine.innerHTML = "id: 匿名用户";
        else
            idLine.innerHTML = "id: " + commenter;
        document.getElementById("avatar").src="../../asset/mikaelAvatar.jpeg"
        idLine.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发表时间:" + getDate();
        remarkLine.innerHTML = remark;
    }
}

function comment(){
    let remark = document.getElementById("commentText").value;
    let commenter = document.getElementById("commenter").value;
    let idLine = document.getElementById("latestID");
    let remarkLine = document.getElementById("latestRemark");
    if(remark !== ""){
        if(commenter === "")
            idLine.innerHTML = "id: 匿名用户";
        else
            idLine.innerHTML = "id: " + commenter;
        document.getElementById("avatar").src="asset/mikaelAvatar.jpeg"
        idLine.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发表时间:" + getDate();
        remarkLine.innerHTML = remark;
    }
}