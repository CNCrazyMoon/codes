function canvas2img(element) {
	// $('#main>div>canvas')
  var imgData = $(element).get(0).toDataURL("image/png");
   return  imgData;
}



//html文件转成pdf格式文件函数
function savePDF(){
var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.internal.scaleFactor = 1;
    var options = {
        pagesplit: true
    };

    pdf.addHTML($("body"), options, function() {
        console.log(pdf);
        pdf.save('专利报表.pdf');
    });
}

$('.download_pdf').on('click',savePDF)

$('.download_png').on('click',renderHTML2PNG)


$('.get_png').on('click',function(){
    $('.download').hide();
    fill_bd_png(function(){
        $('body').append( ['<div class="downloads">',
            '<div class="download get_png">获取长图</div>',
            '<div class="download download_pdf">下载pdf</div>',
            '<div class="download download_png">下载png</div>',
        '</div>'].join(''))
    });
})

function fill_bd_png(callback) {
     html2canvas($("body"), {
        onrendered: function(canvas) {
             var img = canvas.toDataURL();
             $('body').empty();
             $('<img>').attr('src',img).appendTo("body");
             callback && callback();
        }
     });
}
function  renderHTML2PNG() {
    html2canvas($("body"), {
           onrendered: function (canvas) {
               var url = canvas.toDataURL();
                //以下代码为下载此图片功能
               var triggerDownload = $("<a>").attr("href", url).attr("download", new Date*1 +".png").appendTo("body");
                 triggerDownload[0].click();
                 triggerDownload.remove();
             }
     });
}


function renderPDF() {
var doc = new jsPDF();
doc.setFontSize(32);
doc.text(20, 20, 'asdasdsa');
doc.text(20,20,'（截止到2017年3月22日）')
// doc.addImage(canvas2img('#graph1 canvas'), 'png', 0, 0, 120, 80);
doc.text(20,20,'新公开或授权专利趋势')
// doc.addImage(canvas2img('#graph2 canvas'), 'png', 0, 0, 120, 80);
doc.save('a4.pdf')
}
// renderPDF()