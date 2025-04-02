import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../language.service';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent implements OnInit, OnDestroy {
  currentLanguage: 'en' | 'de' = 'en';
  privacyContent: any;
  translations = {
    en: {
      title: 'Privacy Policy',
      responsible: 'Responsible Party',
      responsibleText:
        'The responsible party within the meaning of the data protection laws, in particular the EU General Data Protection Regulation (GDPR), is:',
      name: 'Niklas Lampe',
      address: 'Saarburger Straße 10 12247 Berlin',
      email: 'niklas.lampe00@gmail.com',

      rightsTitle: 'Your Rights as a Data Subject',
      rightsText:
        'Under the contact details provided, you can exercise the following rights at any time according to the EU General Data Protection Regulation (GDPR):',
      rightsList: [
        'Access to your stored data and information about its processing (Art. 15 GDPR)',
        'Correction of incorrect personal data (Art. 16 GDPR)',
        'Deletion of your stored data (Art. 17 GDPR)',
        'Restriction of data processing if we are not yet allowed to delete your data due to legal obligations (Art. 18 GDPR)',
        'Objection to the processing of your data (Art. 21 GDPR)',
        'Data portability, if you have consented to data processing or have a contract with us (Art. 20 GDPR)',
      ],
      rightsNote:
        'If you have given us consent, you can revoke it at any time with effect for the future.',
      rightsComplaint:
        'You can also lodge a complaint with a supervisory authority, such as the data protection authority of your place of residence or the authority responsible for us.',
      rightsAuthorities:
        'A list of supervisory authorities (for the non-public sector) with addresses can be found at: ',

      processingTitle: 'Processing Activities',
      contactTitle: 'Contacting Us',
      processingType: 'Type and Purpose of Processing',
      processingText:
        'Our website provides a contact form that can be used for electronic communication. If a user takes advantage of this option, the data entered in the input mask will be transmitted to us and stored.',
      processingStoredData:
        'At the time the message is sent, the following data is also stored:',
      processingStoredList: ['Date and time of the request'],
      emailProcessing:
        'Contacting us is also possible via the provided email addresses. In this case, the user’s personal data transmitted with the email will be stored. This includes the date and time of the email, email address, IP addresses, and information about the servers involved in the email communication.',
      communicationPurpose:
        'Regardless of the communication method chosen, we collect the content of your inquiry. Your data is stored for the purpose of individual communication with you.',

      legalBasisTitle: 'Legal Basis',
      legalBasisText:
        'The processing of data is based on a legitimate interest (Art. 6 Para. 1 lit. f GDPR).',
      legalBasisReason:
        'Our legitimate interest in processing your data is to facilitate uncomplicated communication.',
      contractBasis:
        'If you contact us to request an offer, the processing of data is carried out for the purpose of taking pre-contractual steps (Art. 6 Para. 1 lit. b GDPR).',

      recipientsTitle: 'Recipients',
      recipientsText:
        'Recipients of the data may be technical service providers who act as processors for the operation and maintenance of our website.',

      storageDurationTitle: 'Storage Duration',
      storageDurationText:
        'Data will be deleted no later than six months after processing the contact request.',
      legalRetentionText:
        'If a contract is concluded, we are subject to statutory retention periods. These are generally 6 or 10 years for the purposes of proper bookkeeping and tax requirements.',

      provisionTitle: 'Provision of Data',
      provisionText:
        'The provision of your personal data is voluntary. However, we can only process your request if you provide the necessary data and the reason for your inquiry.',

      objectionTitle: 'Objection',
      objectionText:
        'Please read further below for information on your right to object under Art. 21 GDPR.',

      objectionRightTitle:
        'Information on Your Right to Object under Art. 21 GDPR',
      objectionRightSubTitle: 'Right to Object on a Case-by-Case Basis',
      objectionRightText:
        'You have the right to object, on grounds relating to your particular situation, to the processing of personal data concerning you, which is based on Art. 6 Para. 1 lit. f GDPR (data processing based on a legitimate interest); this also applies to profiling based on this provision according to Art. 4 No. 4 GDPR.',
      objectionRightConsequence:
        'If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or the processing serves the establishment, exercise, or defense of legal claims.',

      objectionRecipientTitle: 'Recipient of Objection',
      objectionRecipientText: 'Niklas Lampe ',
      objectionRecipientTextTwo: 'niklas.lampe00@gmail.com',
      changesTitle: 'Changes to Our Privacy Policy',
      changesText:
        'We reserve the right to amend this privacy policy to ensure it is always in compliance with current legal requirements or to implement changes to our services in the privacy policy, e.g. with the introduction of new services. For your next visit, the new privacy policy will apply.',

      questionsTitle: 'Questions about Data Protection',
      questionsText:
        'If you have any questions about data protection, please send us an email to the responsible party mentioned above.',

      copyrightNoticeTitle: 'Copyright Notice',
      copyrightNoticeText:
        'This privacy policy was created with the help of the activeMind AG - the experts for ',
        externalDataProtection: 'external data protection officers'
    },
    de: {
      title: 'Datenschutzhinweise',
      responsible: 'Verantwortlicher',
      responsibleText:
        'Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO), ist:',
      name: 'Niklas Lampe',
      address: 'Saarburger Straße 10 12247 Berlin',
      email: 'niklas.lampe00@gmail.com',

      rightsTitle: 'Ihre Betroffenenrechte',
      rightsText:
        'Unter den angegebenen Kontaktdaten können Sie gemäß EU-Datenschutz-Grundverordnung (DSGVO) jederzeit folgende Rechte ausüben:',
      rightsList: [
        'Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)',
        'Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)',
        'Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)',
        'Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)',
        'Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)',
        'Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)',
      ],
      rightsNote:
        'Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.',
      rightsComplaint:
        'Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.',
      rightsAuthorities:
        'Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: ',

      processingTitle: 'Verarbeitungstätigkeit',
      contactTitle: 'Kontaktaufnahme',
      processingType: 'Art und Zweck der Verarbeitung',
      processingText:
        'Auf unserer Website ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert.',
      processingStoredData:
        'Zum Zeitpunkt der Absendung der Nachricht werden zudem folgende Daten gespeichert:',
      processingStoredList: ['Datum und Uhrzeit der Anfrage'],
      emailProcessing:
        'Eine Kontaktaufnahme ist über die bereitgestellten E-Mail-Adressen möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert. Hierzu zählen Datum und Uhrzeit des E-Mailversands, E-Mailadresse, IP-Adressen sowie Informationen zu den an der E-Mail-Kommunikation beteiligten Servern.',
      communicationPurpose:
        'Unabhängig von der gewählten Kommunikationsart erheben wir den Inhalt Ihrer Anfrage. Ihre Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert.',
      legalBasisTitle: 'Rechtsgrundlage',
      legalBasisText:
        'Die Verarbeitung der Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).',
      legalBasisReason:
        'Unser berechtigtes Interesse an der Verarbeitung Ihrer Daten ist die Ermöglichung einer unkomplizierten Kontaktaufnahme.',
      contractBasis:
        'Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).',

      recipientsTitle: 'Empfänger',
      recipientsText:
        'Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.',

      storageDurationTitle: 'Speicherdauer',
      storageDurationText:
        'Daten werden spätestens sechs Monate nach Bearbeitung der Kontaktaufnahme gelöscht.',
      legalRetentionText:
        'Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen. Diese betragen grundsätzlich 6 oder 10 Jahre aus Gründen der ordnungsmäßigen Buchführung und steuerrechtlichen Anforderungen.',

      provisionTitle: 'Bereitstellung vorgeschrieben oder erforderlich',
      provisionText:
        'Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns die erforderlichen Daten und den Grund der Anfrage mitteilen.',

      objectionTitle: 'Widerspruch',
      objectionText:
        'Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.',

      objectionRightTitle:
        'Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO',
      objectionRightSubTitle: 'Einzelfallbezogenes Widerspruchsrecht',
      objectionRightText:
        'Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.',
      objectionRightConsequence:
        'Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.',

      objectionRecipientTitle: 'Empfänger eines Widerspruchs',
      objectionRecipientText: 'Niklas Lampe',
      objectionRecipientTextTwo: 'niklas.lampe00@gmail.com',
      changesTitle: 'Änderung unserer Datenschutzerklärung',
      changesText:
        'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.',

      questionsTitle: 'Fragen zum Datenschutz',
      questionsText:
        'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an den oben genannten Verantwortlichen.',

      copyrightNoticeTitle: 'Urheberrechtliche Hinweise',
      copyrightNoticeText:
        'Diese Datenschutzerklärung wurde mit Hilfe der activeMind AG erstellt – den Experten für ',
        externalDataProtection: 'externe Datenschutzbeauftragte'
    },
  };

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.currentLanguage = lang as 'en' | 'de';
      this.updatePrivacyContent();
    });
    this.updatePrivacyContent();
  }

  ngOnDestroy(): void {}

  updatePrivacyContent(): void {
    this.privacyContent = this.translations[this.currentLanguage];
  }
}
