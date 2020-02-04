import Link from 'next/link'

class Download extends React.Component {
  constructor(props) {
    super(props);
    this.constant = props.constant;
    this.state = {codeEtablissement: '', email: ''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeCodeEtablissement = this.handleChangeCodeEtablissement.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeCodeEtablissement(event) {
    this.setState({codeEtablissement: event.target.value});
  }

  handleSubmit(form) {
    form.preventDefault();

    const rne = encodeURIComponent(this.state.codeEtablissement);
    const email = encodeURIComponent(this.state.email);
    const page = encodeURIComponent(`telechargement depuis la page ${this.constant.id}.html`);

    let params;
    if (this.constant.emailEntryRef) {
      params = `&entry.${this.constant.emailEntryRef}=${email}&entry.${this.constant.pageEntryRef}=${page}`;
    } else {
      params = ` - ${email} - ${page}`
    }
    const url = this.constant.formUrl + rne + params + '&submit=submit';
    const http = new XMLHttpRequest();
    http.open("POST", url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = () => {
      window.location.assign(this.constant.downloadUrl, '_blank');
    }

    http.send();
  }

  render() {
    return (
      <form onSubmit={form => this.handleSubmit(form)}>
        <label>
          Code Etablissement, RNE/UAI:
          <input type="text" value={this.state.codeEtablissement} onChange={this.handleChangeCodeEtablissement} required aria-required="true" />
        </label>
        <label>
          Email:
          <input type="email" value={this.state.email} onChange={this.handleChangeEmail} required aria-required="true" />
        </label>

        <input type="submit" value="Télécharger" />

        <div className="small">
          {this.constant.title} fonctionne sur : Microsoft Access 2016, 2013, 2010.
          Si vous ne disposez pas de Microsoft Access vous pouvez <Link href="https://www.microsoft.com/fr-fr/download/details.aspx?id=10910"><a>télécharger gratuitement le Runtime Access 2010.</a></Link>
        </div>

        <style jsx>{`
          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          label {
            display: flex;
            flex-direction: column;
            padding: 10px 0;
            font-size: 0.9em;
            width: 100%;
          }

          input {
            border: 1px #eee solid;
            border-radius: 2px;
            background-color: #eee;
            line-height: 1.8em;
            padding: 5px 10px;
          }

          input:invalid {
            box-shadow: none;
          }

          input[type="submit"] {
            margin: 10px 0;
            color: #fff;
            text-align: center;
            outline: 0;
            cursor: pointer;
            border: none;
            border-radius: 2px;
            padding: 10px 20px;
            -webkit-tap-highlight-color: transparent;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
            background-color: #26a69a;
            font-family: 'Marvel', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.6px
          }

          .small {
            margin-top: 65px;
            color: #444;
            font-size: 0.8em;
          }
        `}</style>
      </form>
    );
  }
}

export default Download
