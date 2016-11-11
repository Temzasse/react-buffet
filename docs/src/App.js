import React, { Component } from 'react';
import Highlight from 'react-highlight';
import logo from './images/react-buffet-logo2.svg';
import headerBg from './images/header-bg.jpg';
import './App.scss';
import * as codeSnippets from './codeSnippets';

// components
import Tooltip from 'react-buffet/Tooltip';
import Modal from 'react-buffet/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalOpen: false,
    };
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    const { modalOpen } = this.state;

    return (
      <div className='Docs'>
        <header className='Docs-header' style={{ backgroundImage: `url(${headerBg})`}}>
          <div className='Docs-header--content'>
            <h1>React Buffet</h1>
            <h3>Collection of reusable React.js components</h3>
          </div>
        </header>

        <div className='Docs-main'>

          <aside className='Docs-sidemenu'>
            <img className='logo' src={logo} alt='logo' />
            <h3>Components</h3>
            <ul>
              <a href='#tooltip'>
                <li>Tooltip</li>
              </a>
              <a href='#modal'>
                <li>Modal</li>
              </a>
            </ul>
          </aside>

          <div className='Docs-content'>
            <section>
              <h1>Why do we need another component library?</h1>
              <p>To be honest we probably don't need one.</p>
              <p>
                I decided to create this library after implementing several commonly used UI-components in my school / hobby projects.
                I have always enjoyed making my own components from scratch instead of downloading some ready-made component library -
                try it you will learn a lot!
              </p>
              <p>You can check out the code in my <a href='https://github.com/Temzasse/react-buffet'>Github</a>.</p>
              <br/>
              <h2>How do I use this in my project?</h2>
              <p>If you are building you project with some build tool, etc. Webpack, just download react-buffet from npm:</p>
              <pre>
                <code>npm install react-buffet --save</code>
              </pre>
              <p>You can also add the UMD build, just add this script tag and you can access the lib with <strong>window.ReactBuffet</strong></p>
              <div className='code-highlight'>
                <Highlight className='html'>
                  {codeSnippets.lib}
                </Highlight>
              </div>
            </section>
            <hr />
            <section id='tooltip'>
              <h1>Show me the components already!</h1>
              <h2>Tooltip</h2>
              <div className='section-content'>
                <div className='result-example'>
                  <Tooltip content='tooltip content' bg='red' color='rgb(255,255,0)'>
                    <button>Hover over me</button>
                  </Tooltip>
                  <span style={{ marginRight: 20 }} />
                  <Tooltip content='A lot more content just to test it out... Mooooooore text!!!'>
                    <button>Hover over me too</button>
                  </Tooltip>
                </div>
                <div className='code-example'>
                  <Highlight className='html'>
                    {codeSnippets.tooltip}
                  </Highlight>
                </div>
              </div>
            </section>

            <section id='modal'>
              <h2>Modal</h2>
              <div className='section-content'>
                <div className='result-example'>
                  <button onClick={this.openModal}>
                    Open Modal
                  </button>
                  <Modal
                    isOpen={modalOpen}
                    onClose={this.closeModal}
                    title='Test Modal Header'
                  >
                    <div>
                      <h2>Hello World!</h2>
                    </div>
                  </Modal>
                </div>
                <div className='code-example'>
                  <Highlight className='javascript'>
                    {codeSnippets.modalJS}
                  </Highlight>
                  <Highlight className='html'>
                    {codeSnippets.modalHTML}
                  </Highlight>
                </div>
              </div>
            </section>
          </div>{/* end Docs-content */}
        </div> {/* end Docs-main */}
      </div>
    );
  }
}

export default App;
