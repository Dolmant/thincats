jQuery(document).ready(function() {

  jQuery('#bbpress-forums > div.bbp-topic-tags > p > a').each(function(){
    var html = jQuery(this).html();
    jQuery(this).html('<span class="label label-success"><span class="glyphicon glyphicon-tag" aria-hidden="true"></span> ' + html + '</span>');
  });
  jQuery('#bbp_reply_content').addClass('form-control');
  var bread = jQuery('.bbp-breadcrumb p').html();
  jQuery('.bbp-breadcrumb p').html('<div class="btn-group btn-breadcrumb"> ' + bread + '</div>');
  jQuery('.bbp-reply-post-date').each(function(){
    var date = jQuery(this).html();
    jQuery(this).html('<span class="glyphicon glyphicon-calendar" aria-hidden="true" style="margin-bottom: 5px !important;"></span> ' + date);
  });


  jQuery('.bbp-breadcrumb p span:not(:last)').each(function(){
    jQuery(this).hide();
  });
  jQuery('.bbp-breadcrumb p a, .bbp-breadcrumb p span').each(function(){

    jQuery(this).addClass('btn btn-default');
  });
  jQuery('.bbp-breadcrumb p a:first').html('<i class="glyphicon glyphicon-home"></i>');
  jQuery('#bbp_reply_submit').on('click', function(){});
  jQuery('.bbp-topic-freshness > a:first-child, .bbp-forum-freshness > a:first-child').each( function(){
    var time = jQuery(this).html();
    jQuery(this).html('<span class="glyphicon glyphicon-time" style="margin: 4px 5px;position: relative;top: -3px;" aria-hidden="true"></span>' + time);

  });
  jQuery('textarea#bbp_topic_content.bbp-the-content, input#bbp_topic_title').addClass('form-control');

  jQuery('.bbp-topic-title > a, .page-title h1[class != marketplace-back], span.bbp-breadcrumb-current.btn.btn-default').each( function(){
    var length = 45;
    var myString = jQuery(this).html();

    if(myString.length > length){
      jQuery(this).html(myString.substring(0,length) + "... ");
    }
  });

});
