$(document).ready(function () {
    var cnt = $('#LblLanguages').children('a').length;
    if (cnt > 0) {
        $('#alang').click(function () {
            if ($('#LblLanguages').is(':visible'))
                $('#LblLanguages').hide();
            else
                $('#LblLanguages').show();
        });
    }
    else
        $('#divlangdrp').hide();

});
function divshows(test)

{


 $('.divprofileblockcontainer').prepend(test); 
 
$('.MediaCs').css("margin-left","700px")


}

function GITab_Click() {
    if (document.getElementById('RefDiv') != null && document.getElementById('RefDiv') != undefined)
        document.getElementById('RefDiv').style.display = "none";
    if (document.getElementById('GIDiv') != null && document.getElementById('GIDiv') != undefined)
        document.getElementById('GIDiv').style.display = "block";
    if (document.getElementById('ManageDiv') != null && document.getElementById('ManageDiv') != undefined)
        document.getElementById('ManageDiv').style.display = "none";
    if (document.getElementById('ExpndDiv') != null && document.getElementById('ExpndDiv') != undefined)
        document.getElementById('ExpndDiv').style.display = "none";

    if (document.getElementById('ReferenceTab') != null && document.getElementById('ReferenceTab') != undefined)
        document.getElementById('ReferenceTab').className = "divmenu";
    if (document.getElementById('GeneralInfoTab') != null && document.getElementById('GeneralInfoTab') != undefined)
        document.getElementById('GeneralInfoTab').className = "divmenuactive";
    if (document.getElementById('ManagementInfoTab') != null && document.getElementById('ManagementInfoTab') != undefined)
        document.getElementById('ManagementInfoTab').className = "divmenu";
    if (document.getElementById('SupplyCapabilityInfoTab') != null && document.getElementById('SupplyCapabilityInfoTab') != undefined)
        document.getElementById('SupplyCapabilityInfoTab').className = "divmenu";
}
function RefTab_Click() {
    if (document.getElementById('RefDiv') != null && document.getElementById('RefDiv') != undefined)
        document.getElementById('RefDiv').style.display = "block";
    if (document.getElementById('GIDiv') != null && document.getElementById('GIDiv') != undefined)
        document.getElementById('GIDiv').style.display = "none";
    if (document.getElementById('ManageDiv') != null && document.getElementById('ManageDiv') != undefined)
        document.getElementById('ManageDiv').style.display = "none";
    if (document.getElementById('ExpndDiv') != null && document.getElementById('ExpndDiv') != undefined)
        document.getElementById('ExpndDiv').style.display = "none";

    if (document.getElementById('ReferenceTab') != null && document.getElementById('ReferenceTab') != undefined) 
        document.getElementById('ReferenceTab').className = "divmenuactive";   
    if (document.getElementById('GeneralInfoTab') != null && document.getElementById('GeneralInfoTab') != undefined)
        document.getElementById('GeneralInfoTab').className = "divmenu";
    if (document.getElementById('ManagementInfoTab') != null && document.getElementById('ManagementInfoTab') != undefined)
        document.getElementById('ManagementInfoTab').className = "divmenu";
    if (document.getElementById('SupplyCapabilityInfoTab') != null && document.getElementById('SupplyCapabilityInfoTab') != undefined)
        document.getElementById('SupplyCapabilityInfoTab').className = "divmenu";
}
function ManageTab_Click() {
    document.getElementById('RefDiv').style.display = "none";
    document.getElementById('GIDiv').style.display = "none";
    document.getElementById('ManageDiv').style.display = "block";
    document.getElementById('ExpndDiv').style.display = "none";

    document.getElementById('ReferenceTab').className = "divmenu";
    document.getElementById('GeneralInfoTab').className = "divmenu";
    document.getElementById('ManagementInfoTab').className = "divmenuactive";
    document.getElementById('SupplyCapabilityInfoTab').className = "divmenu";
}
function ExpndTab_Click() {
    document.getElementById('RefDiv').style.display = "none";
    document.getElementById('GIDiv').style.display = "none";
    document.getElementById('ManageDiv').style.display = "none";
    document.getElementById('ExpndDiv').style.display = "block";

    document.getElementById('ReferenceTab').className = "divmenu";
    document.getElementById('GeneralInfoTab').className = "divmenu";
    document.getElementById('ManagementInfoTab').className = "divmenu";
    document.getElementById('SupplyCapabilityInfoTab').className = "divmenuactive";
}
// Carousel starts        
var totcount_images = [], img_position = [], myVar_img = [], settimeout_img = [], toshow_img = [3, 3];
$(document).ready(function () {
    InitCarousel('holdercompanypic', 'divmovecompanypic', 0);
    InitCarousel('holderProdpic', 'divmoveprodpic', 1);
});
carousel = function (container, wrapper, array) {
    myVar_img[array] = setInterval(function () {
        if (img_position[array] == (totcount_images[array] - toshow_img[array])) {
            img_position[array] = 0;
            $('#' + wrapper + '> div').attr('class', 'wrapper active');
            $('#' + wrapper).show('slide', { direction: 'left' }, 200);
        }
        else {
            $('#' + wrapper + '> div').eq(img_position[array]).attr('class', 'wrapper inactive');
            $('#' + wrapper).show('slide', { direction: 'left' }, 200);
            img_position[array] = img_position[array] + 1;
        }
    }, 2000);
}
InitCarousel = function (container, wrapper, array) {
    //Properties
    totcount_images[array] = 0;
    img_position[array] = 0;
    myVar_img[array] = 0;
    settimeout_img[array] = 0;
    totcount_images[array] = $('#' + wrapper + '> div').length;
    $('#' + wrapper + '> div').attr('class', 'wrapper');
    $('#' + wrapper + '> div > img').attr('class', 'img');
    if (totcount_images[array] > 3) {
        $('#' + wrapper).show('slide', { direction: 'left' }, 200);
        carousel(container, wrapper, array);
        $('#' + container).before("<a class=\"prev\" id=\"" + container + array + "_prev\" href=\"javascript:void(0)\"><img class=\"nav\" src=\"images\\prev0.png\" /></a>");
        $('#' + container).after("<a class=\"next\" id=\"" + container + array + "_next\" href=\"javascript:void(0)\"><img class=\"nav\" src=\"images\\next0.png\" /></a>");
        $('#' + container + array + '_prev').bind('click', function () {
            clearInterval(myVar_img[array]);
            clearTimeout(settimeout_img[array]);
            if (img_position[array] <= 0) {
                $('#' + wrapper + '> div').attr('class', 'wrapper active');
                $('#' + wrapper).show('slide', { direction: 'left' }, 200);
            }
            else {
                img_position[array] = img_position[array] - 1;
                $('#' + wrapper + '> div').eq(img_position[array]).attr('class', 'wrapper active');
                $('#' + wrapper).show('slide', { direction: 'left' }, 200);
            }
            settimeout_img[array] = setTimeout(function () { carousel(container, wrapper, array); }, 2000);
        });
        $('#' + container + array + '_next').bind('click', function () {
            clearInterval(myVar_img[array]);
            clearTimeout(settimeout_img[array]);
            if (img_position[array] >= (totcount_images[array] - toshow_img[array])) {
                img_position[array] = 0;
                $('#' + wrapper + '> div').attr('class', 'wrapper active');
                $('#' + wrapper).show('slide', { direction: 'right' }, 200);
            }
            else {
                $('#' + wrapper + '> div').eq(img_position[array]).attr('class', 'wrapper inactive');
                $('#' + wrapper).show('slide', { direction: 'right' }, 200);
                img_position[array] = img_position[array] + 1;
            }
            settimeout_img[array] = setTimeout(function () { carousel(container, wrapper, array); }, 2000);
        });
    }
}
// Carousel ends
$(document).ready(function () {
    var min = 0;
    var max = 5;

    var now = $('#hdn_compliance_score').val();
    var siz = (now - min) * 100 / (max - min);
    $("#progressbar_compliance_score").progressbar({ value: siz });

    var now = $('#hdn_Org_score').val();
    var siz = (now - min) * 100 / (max - min);
    $("#progressbar_org_score").progressbar({ value: siz });

    now = $('#hdn_pdt_score').val();
    siz = (now - min) * 100 / (max - min);
    $("#progressbar_operation_score").progressbar({ value: siz });

    now = $('#hdn_pdt_score').val();
    siz = (now - min) * 100 / (max - min);
    $("#progressbar_pdt_score").progressbar({ value: siz });

    now = $('#hdn_quality_score').val();
    siz = (now - min) * 100 / (max - min);
    $("#progressbar_quality_score").progressbar({ value: siz });

    now = $('#hdn_delivery_score').val();
    siz = (now - min) * 100 / (max - min);
    $("#progressbar_delivery_score").progressbar({ value: siz });
});  