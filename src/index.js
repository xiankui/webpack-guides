// 把lodash模块融合进来
import _ from 'lodash';

// 把css模块融合进来，并在打包时解析为样式添加到头部
import './index.css';


function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());