import React from 'react';

import '../styles/main.css';
import '../styles/style.css';
import './newscard.css';
import ArrowIcon from '../Logo/ArrowIcon';

const NewsCardFive = () => {
  return(

    <div class="newscard">
       <h4><b>New Adeptus Astartes Meta is Winning Tournaments</b></h4>
       <h6>June 20, 2019</h6>

       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie libero odio, eu viverra erat feugiat sed. Nullam a augue eget ex sollicitudin accumsan vel ac velit. Cras rutrum ipsum nibh, eget ultrices turpis condimentum interdum. Quisque quis risus volutpat, consequat eros eu, congue turpis. Curabitur in placerat tellus. Mauris tortor nibh, consectetur quis tempus eu, ullamcorper id diam.</p>
       <br/>
       <g class="readmoreGroup"><a href="#" id="readmoreLink">See the list of changes <ArrowIcon/>
       </a></g>
    </div>

    );

};


export default NewsCardFive;
