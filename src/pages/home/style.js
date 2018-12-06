import styled from 'styled-components';

// home组件样式
export const HomeWrap = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;
export const HomeLeft = styled.div`
    float: left
    width: 625px;
    margin: 0 0 15px 0;
    padding: 30px 0 0 0;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    float: right;
    width: 280px;
    margin: 0 auto;
`;
export const BackTop = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #dcdcdc;
    text-align: center;
`;
// topic组件样式
export const TopicWrap = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float: left;
    padding-right: 10px;
    margin: 0 18px 18px 0;
    background-color: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-img{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;
// List组件样式
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-img{
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    float: left;
    width: 480px;
    h3{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #000;
    }
    p{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    box-sizing: border-box;
`;
// 热门推荐
export const RecommendWrap = styled.div`
    margin: 25px 0;
    width: 280px;
`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) =>(props.imgUrl)});
    background-size: cover;
    margin-bottom: 6px;
`;
// 作者列表
export const WriterWrap = styled.div`
    width: 278px;
    height: 300px;
    line-height: 300px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    text-align: center;
`;
