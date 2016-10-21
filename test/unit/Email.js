describe('Email Model', function() {

    describe('Valid data', function() {

        var model;

        beforeEach(function() {
            model = Ext.create('MyDemoApp.model.email.Email');
        });

        afterEach(function() {
            model = null;
        });

        describe('Handling of dates', function() {

            it('Should accept a valid date', function() {
                var date = new Date();
                
                model.set('received_on', date);

                expect(model.get('received_on')).toBe(date);
            });

            it('Should not accept a string value for date', function() {
                model.set('received_on', 'random string');

                expect(model.get('received_on')).toBeNull();
            });

        });
        
    });

});