
export function fixedFooter(){
    $('.footer-section').css('display', 'block');
    $('.footer-section').css('height', 'auto');
    var footerHeight = $('.footer-section').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('.footer-section').css('height', footerHeight);
}