import React, {Component} from 'react';
import {View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class QRCode extends Component {
  state = {
    isRender: true,
  };
  componentDidMount() {
    this.props.navigation.addListener('willFocus', route => {
      this.setState({isRender: true});
    });
    this.props.navigation.addListener('willBlur', route => {
      this.setState({isRender: false});
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>{this.state.isRender && <QRCodeScanner />}</View>
    );
  }
}
export default QRCode;
