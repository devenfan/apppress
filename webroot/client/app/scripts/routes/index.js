Client.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('main');
    }
});
