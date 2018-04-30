$(document).ready(function() {
    //Действия по умолчанию
    $(".tab_content").hide(); //скрыть весь контент
    $("nav.tabs a:first").addClass("active").show(); //Активировать первую вкладку
    $(".tab_content:first").show(); //Показать контент первой вкладки
    
    //Событие по клику
    $("nav.tabs a").click(function() {
        $("nav.tabs a").removeClass("active"); //Удалить "active" класс
        $(this).addClass("active"); //Добавить "active" для выбранной вкладки
        $(".tab_content").hide(); //Скрыть контент вкладки
        var activeTab = $(this).attr("href"); //Найти значение атрибута, чтобы определить активный таб + контент
        $(activeTab).fadeIn(); //Исчезновение активного контента
        return false;
    });
});