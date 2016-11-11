export const lib = `<script src="ADD_URL_HERE"></script>`;
export const tooltip =
`<Tooltip content='tooltip content' bg='red' color='rgb(255,255,0)'>
  <button>Hover over me</button>
</Tooltip>

<Tooltip content='A lot more content just to test it out... Mooooooore text!!!'>
  <button>Hover over me too</button>
</Tooltip>
`;

export const modalJS =
`constructor() {
  this.state = {
    modalOpen: false
  }
}

openModal() {
  this.setState({ modalOpen: true });
}

closeModal() {
  this.setState({ modalOpen: false });
}
`;

export const modalHTML =
`<button onClick={this.openModal}>
  Open Modal
</button>

<Modal
  isOpen={this.state.modalOpen}
  onClose={this.closeModal}
  title='Test Modal Header'
>
  <div>
    <h2>Hello World!</h2>
  </div>
</Modal>
`;
