import Link from 'next/link'

class Download extends React.Component {
  constructor(props) {
    super(props);
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

  handleSubmit(event) {
    event.preventDefault();

    var etablissementCode = $('#input-name');
    var emailCode = $('#input-name-email');
    var inputName = encodeURIComponent(etablissementCode.val() + ' - ' + emailCode.val() + ' - ' + 'page index');
    var baseURL = 'https://docs.google.com/forms/d/1NmOvwDBvewcF_F68_tsugW_jv_4_5aX98mVk-bajzdY/formResponse?entry.162101201=';
    var submitRef = '&submit=submit';
    var submitURL = (baseURL + inputName + submitRef);
    console.log(submitURL);
    $(this)[0].action = submitURL;
    console.log('done');
    window.location.assign('MOBILISCO V5.7.1.zip');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Code Etablissement, RNE/UAI:
          <input type="text" value={this.state.codeEtablissement} onChange={this.handleChangeCodeEtablissement} required aria-required="true" />
        </label>
        <label>
          Email:
          <input type="email" value={this.state.email} onChange={this.handleChangeEmail} required aria-required="true" />
        </label>

        <input type="submit" value="Télécharger MobiliSCO v5.7.1" />

        <div className="small">
          Mobilisco fonctionne sur : Microsoft Access 2013, 2010, 2007, 2002.
          Si vous ne disposez pas de Microsoft Access vous pouvez <Link href="https://www.microsoft.com/fr-fr/download/details.aspx?id=10910"><a>télécharger gratuitement le Runtime Access.</a></Link>
        </div>

        <style jsx>{`
          label {
            display: flex;
            flex-direction: column;
            padding: 10px 0;
            font-size: 0.9em;
          }

          input {
            border: 1px #eee solid;
            border-radius: 2px;
            background-color: #eee;
            line-height: 1.8em;
            padding: 5px 10px;
          }

          input[type="submit"] {
            margin: 10px 20px;
            color: #fff;
            text-align: center;
            outline: 0;
            cursor: pointer;
            border: none;
            border-radius: 2px;
            display: inline-block;
            min-height: 45px;
            line-height: 45px;
            padding: 0 2rem;
            -webkit-tap-highlight-color: transparent;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
            background-color: #26a69a;
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
