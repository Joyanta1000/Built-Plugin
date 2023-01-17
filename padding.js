$("[class^=p-]").each(function () {
    $(this).css('padding', ($(this).attr('class').match(/(?:^|\s)p-(\d+)(?:$|\s)/)[1] * 1) + "px");
});
$("[class^=pl-]").each(function () {
    $(this).css('padding-left', ($(this).attr('class').match(/(?:^|\s)pl-(\d+)(?:$|\s)/)[1] * 1) + "px");
});
$("[class^=pr-]").each(function () {
    $(this).css('padding-right', ($(this).attr('class').match(/(?:^|\s)pr-(\d+)(?:$|\s)/)[1] * 1) + "px");
});
$("[class^=pt-]").each(function () {
    $(this).css('padding-top', ($(this).attr('class').match(/(?:^|\s)pt-(\d+)(?:$|\s)/)[1] * 1) + "px");
});
$("[class^=pb-]").each(function () {
    $(this).css('padding-bottom', ($(this).attr('class').match(/(?:^|\s)pb-(\d+)(?:$|\s)/)[1] * 1) + "px");
});