function product(){
    alert('hi');
}
function SaveProduct(){
    var url= "/api/Product";
    var objectProduct = {};
    objectProduct.Name = $('#txtProductName').val();
    objectProduct.Price = $('#txtProductPrice').val();
    objectProduct.Quantity = $('#txtProductQuantity').val();
    objectProduct.Active = 1;
    if(objectProduct){
        $.ajax({
            url:url,
            contentType:"application/json; charset=UTF-8",
            dataType: "json",
            data: JSON.stringify(objectProduct),
            type:"Post",
            success: function (result){
                alert(result);
            },
            error: function (msg){
                alert(msg);
            }
        })
    }

}