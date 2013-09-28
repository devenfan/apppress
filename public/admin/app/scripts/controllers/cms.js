Admin.CmsController = Em.ArrayController.extend({
    needs: ['app','cmsStore'],
    actions: {

    },
    createCmsMenu: function(subId, subCode) {
        var me = this;
        var appController = me.get('controllers.app');

        var app = appController.get('content');
        var appId = app.get('id');

        $.ajax({
            type : 'GET',
            dataType : 'json',
            url : Vari.ApiPath + 'sub/list',
            data: {appId: appId},

            success : function(items, textStatus) {
                CmsUtil.createSubMenu(items);
                $(".jcarousel-container").delegate('li.jcarousel-item','click',(function(e){
                    if(!$(this).hasClass("forbidden")){
                        $('li.jcarousel-item').removeClass('active');
                        $(this).addClass('active');

                        CmsUtil.clearContentView();
                        me.showCmsContent($(this).attr('data-id'), $(this).attr('data-code'));
                    }
                }));
            }
        });
    },
    showCmsContent: function(subId, subCode) {
        var me = this;
        var sub = me.store.find('subscription', subId).then(function(sub) {
            var moduleId = sub.get('moduleId');
            me.get('controllers.cms' + Util.capFirstLetter(subCode)).showContent(moduleId);
        });
    }
});
