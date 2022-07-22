function ClickConnect(){
    console.log("Working"); 
    document
      .querySelector("#top-toolbar > colab-connect-button")
      .shadowRoot
      .querySelector("#connect")
      .click()
  }
   
  var id=setInterval(ClickConnect,5*60000)   //5分钟点一次，改变频率把5换成其他数即可，单位分钟
   
   
  //要提前停止，请输入运行以下代码：    clearInterval(id)