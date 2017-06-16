// 把lodash模块融合进来
import _ from 'lodash';

// 把css模块打包进来，并在js解析时还原为样式添加到头部
import './index.css';


function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', 'development'], ' ');

  return element;
}

document.body.appendChild(component());