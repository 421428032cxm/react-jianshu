import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height: 56px;
    border: 1px solid #f0f0f0;
    position: relative;
    z-index: 1;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${LogoPic});
    background-size: contain
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;  
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left
    }
    &.right {
        float: right;
        color: #969696;
    } 
    &.active{
        color: #ea6f5a;
    }
`;

export const SearchWrap = styled.div`
    position: relative;
    float: left;
`;

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 200px;
    height: 38px;
    padding: 0 20px;
    margin: 9px 0 0 20px;
    box-sizing: border-box;  
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999
    }
    &.focused {
        width: 280px;
    }
    &.slider-enter{
        transition: all .2s ease-out
    }
    &.slider-enter-active{
        width: 280px;
    }
    &.slider-exit{
        transition: all .2s ease-out
    }
    &.slider-exit-active{
        width: 200px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin: 9px 20px 0 0;
    padding: 0 25px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 58px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`
export const SearchInfoTitle = styled.div`
    margin: 20px 0 15px 0;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.a`
    display: block;
    float: right;
    font-size: 12px;
    cursor: pointer;
    .spin {
        display: inline-block;
        font-size: 12px;
        margin-right: 5px;
        transition: all .4s ease-in;
        transfrom-origin: center center;
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    margin: 0 10px 10px 0; 
    padding: 5px;
    line-height: 20px;
    color: #333;
    border-radius: 3px;
    border: 1px solid #ddd;
`
