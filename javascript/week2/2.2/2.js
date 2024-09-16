const now = {
    width : 2,
    height : 3,
    color: "red"
}
function area(rect) {
    return rect.width * rect.height;
}

const ans = area(now);
console.log(ans);//method without class