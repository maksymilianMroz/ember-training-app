import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({

    marker: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [ -96.7969879, 32.7766642 ] }
          }
        ]
      },
    
      actions: {
        mapClicked({ target: map, point }) {
          console.log(map, point);
        }
      },

    name: '',
    emailAddress: '',
    address: '',

    isDisabled: empty('name' && 'emailAddress' && 'address'),

    actions: {

        updateData() {

            this.set('updateData', 'Właśnie zaktualizowałeś swoje dane!');

            this.set('nameNow', `${this.get('name')}`);
            this.set('emailNow', `${this.get('emailAddress')}`);
            this.set('addressNow', `${this.get('address')}`);

            this.set('name', '');
            this.set('emailAddress', '');
            this.set('address', '');
        

        }
    }
                
});


