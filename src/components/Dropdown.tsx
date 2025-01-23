import {
  Link,

} from 'react-router-dom';
import PropTypes from 'prop-types';

const Dropdown = (props: any) => {

  

  const list: any = props.list
  const urllist: any = props.lurl


  const listItems = list.map((list: any, index: any) =>
    <Link key={list.toString()} to={urllist[index].toString()}>
      <div className="item__menu__style list-item color_lv_1-3 menu_item2 actdis" onClick={props.onclick} >
      <div className="arrow">
      <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<title/>

<g id="Complete">

<g id="minus">

<line fill="none" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="4" x2="20" y1="12" y2="12"/>

</g>

</g>

</svg>
          </div>
        {list}
      </div>
    </Link>
  );


  return (
    <div className="dropdown"  >
      <input id={props.id} type="checkbox" />
      <label htmlFor={props.id}>
        <div className="menuitem-dropdown item__menu__style color_lv_1-3 menu_item_drop " >
         
          <div className="dropname">
            {props.nitem}
          </div>
          <div className="arrow">
            <svg width="16px" height="16px" viewBox="-4.5 0 20 20" >

              <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="currentColor">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]">

                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </label>
      <div className="listmenu " id="elem">
        {listItems}
      </div>
    </div>
  )


}
Dropdown.propTypes = {
  list: PropTypes.array,
  url: PropTypes.string,




}
Dropdown.defaultProps = {
  list: '',
  url: '/',


}


export default Dropdown

