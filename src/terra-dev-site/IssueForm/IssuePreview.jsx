import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import Popup from 'terra-popup';
import Markdown from 'terra-markdown';

const titleTemplate = (title, repo, selectedPackage) => `# Title
[${repo}][${selectedPackage}] ${title}
`;

class IssuePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
  }

  setButtonNode(node) {
    this.parentNode = node;
  }

  getButtonNode() {
    return this.parentNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    const { title, repo, open, close, selectedPackage, issueBody, targetRef, openPopup, closePopup } = this.props;
    const markdownBody = titleTemplate(title, repo, selectedPackage) + issueBody;
    console.log(targetRef);
    return (
      <React.Fragment>
        <Popup isOpen={open} contentHeight="auto" targetRef={targetRef} contentWidth="640" onRequestClose={close}>
          <Spacer padding="large+2">
            <Markdown src={markdownBody} />
          </Spacer>
        </Popup>
        <Button text="Preview" onClick={openPopup} refCallback={this.setButtonNode}/>
      </React.Fragment>
    );
  }
}

export default IssuePreview;
