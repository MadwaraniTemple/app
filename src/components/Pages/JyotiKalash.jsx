import React, { useState } from 'react';
import axios from 'axios';
import classes from './JyotiKalash.module.css';
import { useTranslation } from "react-i18next";
import MaaMadwaraniImg from '../../assets/JyotiKalash.png';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';

const JyotiKalash = (props) => {

    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contactNo: '',
        jyotiKalashType: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalReceipt, setModalReceipt] = useState(null);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [registrations, setRegistrations] = useState([]);
    const [loadingRegs, setLoadingRegs] = useState(false);
    const [regsError, setRegsError] = useState('');
    const [receiptNumber, setReceiptNumber] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [searchResults, setSearchResults] = useState([]); // For multiple results
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchError, setSearchError] = useState('');

    const jyotiKalashTypes = [
        { key: 'ghritShringarJyoti', label: t("jyotiKalash.ghritShringarJyoti.header"), price: t("jyotiKalash.ghritShringarJyoti.price"), apiValue: 'GHRIT_SHRINGAR_JYOTI_KALASH' },
        { key: 'ghritJyoti', label: t("jyotiKalash.ghritJyoti.header"), price: t("jyotiKalash.ghritJyoti.price"), apiValue: 'GHRIT_JYOTI_KALASH' },
        { key: 'telShringarJyoti', label: t("jyotiKalash.telShringarJyoti.header"), price: t("jyotiKalash.telShringarJyoti.price"), apiValue: 'TEL_SHRINGAR_JYOTI_KALASH' },
        { key: 'telJyoti', label: t("jyotiKalash.telJyoti.header"), price: t("jyotiKalash.telJyoti.price"), apiValue: 'TEL_JYOTI_KALASH' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const fetchRegistrations = async () => {
        setLoadingRegs(true);
        setRegsError('');
        try {
            const resp = await axios.get('https://ohi5m84k32.execute-api.ap-south-1.amazonaws.com/dev/jyotiKalash');
            let data = resp.data;
            // handle common API Gateway wrappers
            if (typeof data === 'string') {
                try { data = JSON.parse(data); } catch (e) { /* keep as string */ }
            }
            if (data && data.body) {
                try { data = typeof data.body === 'string' ? JSON.parse(data.body) : data.body; } catch (e) { data = data.body; }
            }
            // ensure array
            if (!Array.isArray(data)) {
                // if it's an object with items, try that
                if (data && Array.isArray(data.items)) data = data.items;
                else data = [data];
            }
            
            // Map to only include the required fields
            const filteredData = data.map(item => ({
                receiptNumber: item.receiptNumber,
                name: item.name,
                address: item.address,
                contact: item.contact,
                type: item.type
            }));
            
            setRegistrations(filteredData);
        } catch (error) {
            console.error('Failed to fetch registrations', error);
            setRegsError('Failed to load registrations');
        } finally {
            setLoadingRegs(false);
        }
    };

    const searchByReceiptNumber = async (e) => {
        e.preventDefault();
        
        if (!receiptNumber.trim()) {
            setSearchError('Please enter a receipt number');
            return;
        }
        
        setSearchLoading(true);
        setSearchError('');
        setSearchResult(null);
        setSearchResults([]); // Clear multiple results
        
        try {
            const url = `https://ohi5m84k32.execute-api.ap-south-1.amazonaws.com/dev/jyotiKalash/${receiptNumber}`;
            const resp = await axios.get(url);
            let data = resp.data;
            
            // handle common API Gateway wrappers
            if (typeof data === 'string') {
                try { data = JSON.parse(data); } catch (e) { /* keep as string */ }
            }
            if (data && data.body) {
                try { data = typeof data.body === 'string' ? JSON.parse(data.body) : data.body; } catch (e) { data = data.body; }
            }
            
            if (data) {
                // Extract only required fields
                const filteredResult = {
                    receiptNumber: data.receiptNumber,
                    name: data.name,
                    address: data.address,
                    contact: data.contact,
                    type: data.type
                };
                setSearchResult(filteredResult);
            } else {
                setSearchError('No registration found for this receipt number');
            }
        } catch (error) {
            console.error('Failed to fetch registration', error);
            setSearchError('No registration found for this receipt number');
        } finally {
            setSearchLoading(false);
        }
    };

    const searchByContactNumber = async (e) => {
        e.preventDefault();
        
        if (!contactNumber.trim()) {
            setSearchError('Please enter a contact number');
            return;
        }
        if (!/^[0-9]{10}$/.test(contactNumber)) {
            setSearchError('Please enter a valid 10-digit contact number');
            return;
        }
        
        setSearchLoading(true);
        setSearchError('');
        setSearchResult(null);
        setSearchResults([]); // Clear previous results
        
        try {
            const url = `https://ohi5m84k32.execute-api.ap-south-1.amazonaws.com/dev/jyotiKalash/contact/${contactNumber}`;
            const resp = await axios.get(url);
            let data = resp.data;
            
            console.log('Raw response:', resp);
            console.log('Response data:', data);
            
            // handle common API Gateway wrappers
            if (typeof data === 'string') {
                try { data = JSON.parse(data); } catch (e) { /* keep as string */ }
            }
            if (data && data.body) {
                try { data = typeof data.body === 'string' ? JSON.parse(data.body) : data.body; } catch (e) { data = data.body; }
            }
            
            console.log('Processed data:', data);
            
            if (data) {
                // Check if response is an array (multiple registrations)
                if (Array.isArray(data)) {
                    if (data.length > 0) {
                        // Map all registrations to filtered format
                        const filteredResults = data.map(item => ({
                            receiptNumber: item.receiptNumber,
                            name: item.name,
                            address: item.address,
                            contact: item.contact,
                            type: item.type
                        }));
                        setSearchResults(filteredResults);
                        console.log(`Found ${data.length} registration(s) for this contact`);
                    } else {
                        setSearchError('No registration found for this contact number');
                    }
                } else {
                    // Single object response
                    const filteredResult = {
                        receiptNumber: data.receiptNumber,
                        name: data.name,
                        address: data.address,
                        contact: data.contact,
                        type: data.type
                    };
                    setSearchResults([filteredResult]); // Wrap in array for consistency
                }
            } else {
                setSearchError('No registration found for this contact number');
            }
        } catch (error) {
            console.error('Failed to fetch registration', error);
            console.error('Error details:', error.response);
            setSearchError('No registration found for this contact number');
        } finally {
            setSearchLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // mark loading and open modal (processing state)
        setLoadingSubmit(true);
        setShowModal(true);
        setSubmissionSuccess(false);

        // Find the selected type's API value
        const selectedType = jyotiKalashTypes.find(t => t.key === formData.jyotiKalashType);
        const typeApiValue = selectedType ? selectedType.apiValue : '';

        // Prepare data for API
        const apiData = {
            //receiptNumber: "1111",
            name: formData.name,
            address: formData.address,
            contact: parseInt(formData.contactNo),
            type: typeApiValue,
            festival: "BASANTI",
            registrationYear: 2025,
        };

        // Call API endpoint using axios
        axios.post('https://ohi5m84k32.execute-api.ap-south-1.amazonaws.com/dev/jyotiKalash', apiData)
            .then(response => {
                console.log('Registration successful:', response.data);
                // try extract receipt number from response
                const respData = response && response.data ? response.data : null;
                const receipt = respData && (respData.receiptNumber || respData.receipt || respData.id) ? (respData.receiptNumber || respData.receipt || respData.id) : null;
                setModalReceipt(receipt);
                setSubmissionSuccess(true);
            })
            .catch(error => {
                console.error('Error:', error);
                setSubmissionSuccess(false);
                setModalReceipt(null);
            })
            .finally(() => {
                setLoadingSubmit(false);
            });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        // if submission succeeded, reset the form so user can register again
        if (submissionSuccess) {
            setFormData({
                name: '',
                address: '',
                contactNo: '',
                jyotiKalashType: ''
            });
            setSubmissionSuccess(false);
            setModalReceipt(null);
        }
    };

    // Check if all required fields are filled
    const isFormValid = () => {
        return formData.name.trim() !== '' &&
               formData.address.trim() !== '' &&
               formData.contactNo.trim() !== '' &&
               /^[0-9]{10}$/.test(formData.contactNo) &&
               formData.jyotiKalashType !== '';
    };

    return <div className={classes.body} id="JyotiKalash">

        <h1> { t("jyotiKalash.header") } </h1>

        <Row xs={1} md={4} className="g-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={MaaMadwaraniImg} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("jyotiKalash.ghritShringarJyoti.header") }</h3> </Card.Title>
                        <Card.Title> <h3>{ t("jyotiKalash.ghritShringarJyoti.price") }</h3> </Card.Title>
                        {/* <Card.Text> { t("JyotiKalash.para") } </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={MaaMadwaraniImg} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("jyotiKalash.ghritJyoti.header") }</h3> </Card.Title>
                        <Card.Title> <h3>{ t("jyotiKalash.ghritJyoti.price") }</h3> </Card.Title>
                        {/* <Card.Text> { t("JyotiKalash.para") } </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={MaaMadwaraniImg} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("jyotiKalash.telShringarJyoti.header") }</h3> </Card.Title>
                        <Card.Title> <h3>{ t("jyotiKalash.telShringarJyoti.price") }</h3> </Card.Title>
                        {/* <Card.Text> { t("JyotiKalash.para") } </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={MaaMadwaraniImg} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("jyotiKalash.telJyoti.header") }</h3> </Card.Title>
                        <Card.Title> <h3>{ t("jyotiKalash.telJyoti.price") }</h3> </Card.Title>
                        {/* <Card.Text> { t("JyotiKalash.para") } </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Container className={classes.registrationFormContainer}>
            <h2 className={classes.formTitle}>{t('jyotiKalashPage.registrationForm.title')}</h2>
            
            {submitted && <div className={classes.successMessage}>{t('jyotiKalashPage.registrationForm.successMessage')}</div>}
            
            <Form onSubmit={handleSubmit} className={classes.registrationForm}>
                <Form.Group className="mb-3">
                    <Form.Label>{t('jyotiKalashPage.registrationForm.labels.name')}</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder={t('jyotiKalashPage.registrationForm.placeholders.name')}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        maxLength={100}
                        disabled={loadingSubmit}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('jyotiKalashPage.registrationForm.labels.address')}</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        placeholder={t('jyotiKalashPage.registrationForm.placeholders.address')}
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        maxLength={250}
                        disabled={loadingSubmit}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('jyotiKalashPage.registrationForm.labels.contact')}</Form.Label>
                    <Form.Control
                        type="tel"
                        name="contactNo"
                        placeholder={t('jyotiKalashPage.registrationForm.placeholders.contact')}
                        pattern="[0-9]{10}"
                        value={formData.contactNo}
                        onChange={handleInputChange}
                        required
                        disabled={loadingSubmit}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('jyotiKalashPage.registrationForm.labels.type')}</Form.Label>
                    <div className={classes.radioButtonGroup}>
                        {jyotiKalashTypes.map((type) => {
                            const isSelected = formData.jyotiKalashType === type.key;
                            const optionClasses = [classes.radioOption, isSelected ? classes.selected : ''];
                            if (loadingSubmit) optionClasses.push(classes.disabled);
                            return (
                                <div
                                    key={type.key}
                                    role="radio"
                                    aria-checked={isSelected}
                                    tabIndex={0}
                                    className={optionClasses.join(' ')}
                                    onClick={() => { if (!loadingSubmit) setFormData(prev => ({ ...prev, jyotiKalashType: type.key })); }}
                                    onKeyDown={(e) => {
                                        if (loadingSubmit) return;
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            setFormData(prev => ({ ...prev, jyotiKalashType: type.key }));
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <div className={classes.optionLabel}>{type.label}</div>
                                    <div className={classes.optionPrice}>{type.price}</div>
                                </div>
                            );
                        })}
                        {/* Hidden required input to satisfy HTML5 required validation */}
                        <input type="hidden" name="jyotiKalashType" value={formData.jyotiKalashType} required />
                    </div>
                </Form.Group>

                <Button 
                    variant="primary" 
                    type="submit" 
                    className={classes.submitButton} 
                    disabled={loadingSubmit || !isFormValid()}
                    style={{
                        opacity: (!isFormValid() && !loadingSubmit) ? 0.6 : 1,
                        backgroundColor: '#D2691E',
                        borderColor: '#D2691E',
                        cursor: (!isFormValid() && !loadingSubmit) ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loadingSubmit ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="me-2"
                            />
                            {t('jyotiKalashPage.registrationForm.submitting')}
                        </>
                    ) : (
                        t('jyotiKalashPage.registrationForm.submit')
                    )}
                </Button>
            </Form>
            {/* Success / Processing Modal */}
            <Modal show={showModal} onHide={handleCloseModal} backdrop={loadingSubmit ? 'static' : true} keyboard={!loadingSubmit}>
                <Modal.Header closeButton={!loadingSubmit}>
                    <Modal.Title>{loadingSubmit ? t('jyotiKalashPage.modal.processing') : (submissionSuccess ? t('jyotiKalashPage.modal.successful') : t('jyotiKalashPage.modal.registration'))}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loadingSubmit ? (
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                            <Spinner animation="border" size="sm" />
                            <span>{t('jyotiKalashPage.modal.processingMessage')}</span>
                        </div>
                    ) : submissionSuccess ? (
                        <div>
                            {modalReceipt ? <p><strong>{t('jyotiKalashPage.modal.receiptNumber')}</strong> {modalReceipt}</p> : null}
                        </div>
                    ) : (
                        <div>
                            <p>{t('jyotiKalashPage.modal.failureText')}</p>
                            <Button variant="secondary" onClick={handleCloseModal} style={{width: '100%'}}>{t('jyotiKalashPage.modal.close')}</Button>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </Container>

        <Container className={classes.tableContainer}>
            <div className={classes.tableHeader} style={{display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between'}}>
                <h2 className={classes.formTitle}>{t('jyotiKalashPage.registrationsTable.title')}</h2>
                <div>
                    <Button variant="secondary" onClick={fetchRegistrations} disabled={loadingRegs}>
                        {loadingRegs ? t('jyotiKalashPage.registrationsTable.loading') : t('jyotiKalashPage.registrationsTable.loadButton')}
                    </Button>
                </div>
            </div>

            {regsError && <div className={classes.errorMessage}>{regsError}</div>}

            {registrations && registrations.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>{t('jyotiKalashPage.registrationsTable.columns.receipt')}</th>
                            <th>{t('jyotiKalashPage.registrationsTable.columns.name')}</th>
                            <th>{t('jyotiKalashPage.registrationsTable.columns.address')}</th>
                            <th>{t('jyotiKalashPage.registrationsTable.columns.contact')}</th>
                            <th>{t('jyotiKalashPage.registrationsTable.columns.type')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.map((r, idx) => (
                            <tr key={r.receiptNumber || idx}>
                                <td>{r.receiptNumber}</td>
                                <td>{r.name}</td>
                                <td>{r.address}</td>
                                <td>{r.contact}</td>
                                <td>{r.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <div style={{marginTop: '1rem', color: '#666'}}>{loadingRegs ? t('jyotiKalashPage.registrationsTable.fetchingMessage') : t('jyotiKalashPage.registrationsTable.noData')}</div>
            )}
        </Container>

        <Container className={classes.searchContainer}>
            <h2 className={classes.formTitle}>{t('jyotiKalashPage.searchSection.title')}</h2>
            
            <Row className="g-3">
                {/* Search by Receipt Number */}
                <Col md={6}>
                    <Form onSubmit={searchByReceiptNumber} className={classes.searchForm}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('jyotiKalashPage.searchSection.label')}</Form.Label>
                            <div style={{display: 'flex', gap: '0.75rem'}}>
                                <Form.Control
                                    type="text"
                                    placeholder={t('jyotiKalashPage.searchSection.placeholder')}
                                    value={receiptNumber}
                                    onChange={(e) => {
                                        setReceiptNumber(e.target.value);
                                        setSearchError('');
                                    }}
                                />
                                <Button variant="primary" type="submit" disabled={searchLoading}>
                                    {searchLoading ? (
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                className="me-2"
                                            />
                                            {t('jyotiKalashPage.searchSection.searching')}
                                        </>
                                    ) : (
                                        t('jyotiKalashPage.searchSection.searchButton')
                                    )}
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
                
                {/* Search by Contact Number */}
                <Col md={6}>
                    <Form onSubmit={searchByContactNumber} className={classes.searchForm}>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact Number</Form.Label>
                            <div style={{display: 'flex', gap: '0.75rem'}}>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter 10-digit contact number"
                                    pattern="[0-9]{10}"
                                    value={contactNumber}
                                    onChange={(e) => {
                                        setContactNumber(e.target.value);
                                        setSearchError('');
                                    }}
                                />
                                <Button variant="primary" type="submit" disabled={searchLoading}>
                                    {searchLoading ? (
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                className="me-2"
                                            />
                                            Searching...
                                        </>
                                    ) : (
                                        'Search'
                                    )}
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            {searchError && <div className={classes.errorMessage}>{searchError}</div>}

            {/* Single result display (for receipt search) */}
            {searchResult && (
                <div className={classes.searchResultContainer}>
                    <h3>{t('jyotiKalashPage.searchSection.detailsTitle')}</h3>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.receipt')}</th>
                                <td>{searchResult.receiptNumber}</td>
                            </tr>
                            <tr>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.name')}</th>
                                <td>{searchResult.name}</td>
                            </tr>
                            <tr>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.address')}</th>
                                <td>{searchResult.address}</td>
                            </tr>
                            <tr>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.contact')}</th>
                                <td>{searchResult.contact}</td>
                            </tr>
                            <tr>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.type')}</th>
                                <td>{searchResult.type}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )}

            {/* Multiple results display (for contact search) */}
            {searchResults && searchResults.length > 0 && (
                <div className={classes.searchResultContainer}>
                    <h3>
                        {searchResults.length === 1 
                            ? 'Registration Details' 
                            : `Found ${searchResults.length} Registrations`}
                    </h3>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.receipt')}</th>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.name')}</th>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.address')}</th>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.contact')}</th>
                                <th>{t('jyotiKalashPage.registrationsTable.columns.type')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.map((result, idx) => (
                                <tr key={result.receiptNumber || idx}>
                                    <td>{result.receiptNumber}</td>
                                    <td>{result.name}</td>
                                    <td>{result.address}</td>
                                    <td>{result.contact}</td>
                                    <td>{result.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </Container>
    </div>
        
};

export default JyotiKalash;