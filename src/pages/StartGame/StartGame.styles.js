import styled from 'styled-components';

export const Button = styled.button`
	height: 64px;

/* Orange-100 */

background: #FF8B37;
border-radius: 12px;
`;

export const Hand = styled.div`
    position: absolute;
    //width: 43%;
    //height: 40%;
    //left: 5%;
    //top: 25%;
    width: 624px;
height: 367px;
left: 80px;
top: 229px;
    background: url("../../assets/Hand.svg");
`;

export const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right bottom, white 50%, #FFF3EB 50%);
	    //background: url("../../assets/Rectangle 15.png");
    //
	//.bottom {
	//	position: relative;
	//	width: 100%;
	//	height: 50%;
	//	bottom: 0;
	//	//transform: rotate(30);
	//	background: #FFF3EB;
	//}
`;
