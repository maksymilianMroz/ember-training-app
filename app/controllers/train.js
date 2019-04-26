import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({

    trainWhen: '',
    trainHow: '',

    isDisabled: empty('trainWhen' && 'trainHow'),

    actions: {

        trainingData() {

            this.set('updateData', 'Właśnie zaktualizowałeś swoje dane treningowe!');

            this.set('trainWhenNow', `${this.get('trainWhen')}`);
            this.set('trainHowNow', `${this.get('trainHow')}`);

            this.set('name', '');
            this.set('emailAddress', '');
            this.set('address', '');
            


        }
    }
                
});
