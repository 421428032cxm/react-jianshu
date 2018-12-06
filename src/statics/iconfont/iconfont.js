import { createGlobalStyle } from 'styled-components';

const GlobalIconFont = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1539237773309'); /* IE9*/
    src: url('./iconfont.eot?t=1539237773309#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1539237773309') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1539237773309#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default GlobalIconFont;
