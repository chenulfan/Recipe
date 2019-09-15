// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import food from "../Food.json"
// import CheckBox from './Form/check.js/index.js';
// import Header from './popUp/Header.js';
// import Details from './popUp/Details.js';

// class Log extends Component {
//     render() {
//         console.log(food.sugar)
//         return (
//             <div >
//                 <div className="blur">  </div>
//                 <div className="popUp">
//                     <Header />
//                     <img className="img-popup" src="https://static.hashulchan.co.il/www/uploads/2019/09/Al-Hashulchan-00242-2000x1125.jpg" />
//                     <Details />
//                     <div>
//                         <div className="popup-sub-header"> what do we need ? </div>
//                         <div className="popup-ingredients-wrapper underline-box">
//                             <div>
//                                 <img className="ingredient-pic" src={food.banana} />
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span>Banana</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <img className="ingredient-pic" src={food.banana} />
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span>Banana</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <img className="ingredient-pic" src={food.banana} />
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span>Banana</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <img className="ingredient-pic" src={food.banana} />
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span>Banana</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <img className="ingredient-pic" src={food.banana} />
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span>Banana</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <img className="ingredient-pic" src={food.banana} />
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span>Banana</span>
//                                 </label>
//                             </div>
//                         </div>

//                         <div className="popup-sub-header"> Ingredients </div>
//                         <div className="underline-box">
//                             <div className="ing-list">
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span className="popup-ing-check">1/2 2 דפי ג'לטין או 9 גרם אבקת ג'לטין</span>
//                                 </label>
//                             </div>
//                             <div className="ing-list">
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span>4 מיכלים (1 ליטר) שמנת מתוקה</span>
//                                 </label>
//                             </div>
//                             <div className="ing-list">
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span>120 גרם ( 1/2 כוס + 2 כפות) סוכר</span>
//                                 </label>
//                             </div>
//                             <div className="ing-list">
//                                 <label>
//                                     <input type="checkbox" />
//                                     <span>250 מ"ל ( 1 כוס + כף) קרם קוקוס</span>
//                                 </label>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="popup-sub-header"> Steps: </div>
//                     <div className="underline-box ">
//                         <div className="num-step"> 1 </div>
//                         <div className="step-popup"> Heat oven to 350 degrees F (175 degrees C). Coat a Bundt pan well with cooking spray </div>
//                         <div className="num-step"> 2 </div>
//                         <div className="step-popup"> Make the streusel topping: Mix 1 brown cup sugar, 2/3 cup flour, and cinnamon in a medium bowl. Cut in 1/2 cup butter or margarine; topping mixture will be crumbly. Set aside. </div>
//                     </div>

//                 </div>
//             </div>


//         )

//     }
// }
// export default Log