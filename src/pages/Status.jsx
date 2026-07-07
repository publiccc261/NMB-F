import { useNavigate } from 'react-router-dom';
import './Status.css';

export default function Status() {
  const navigate = useNavigate();
  
  // Loan parameters
  const LOAN_RATE = 8;                    // 8% per annum
  const BALANCE_REQUIRED_PERCENT = 10;    // 10% balance required

  // Get data from localStorage
  const phoneNumber = localStorage.getItem('login_phone') || localStorage.getItem('nmb_phone') || '+263 777 123 4567';
  const firstName = localStorage.getItem('firstName') || 'User';
  const lastName = localStorage.getItem('lastName') || '';
  const email = localStorage.getItem('email') || 'user@example.com';
  const applicationId = localStorage.getItem('applicationId') || 'APP_' + Date.now();
  
  // Get the loan amount the user applied for
  const appliedLoanAmount = parseFloat(localStorage.getItem('loanAmount')) || 0;
  const appliedLoanTerm = parseInt(localStorage.getItem('loanTerm')) || 12;
  
  // Calculate balance required for this specific loan
  const balanceRequired = (appliedLoanAmount * BALANCE_REQUIRED_PERCENT / 100).toFixed(2);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="status-container">
      <header className="status-header">
        <img src="/logo.svg" alt="Logo" className="status-logo-img" />
        <div className="status-logo">NMB<span className="status-gold">Connect</span></div>
        <div className="status-subtitle">Application Status</div>
      </header>

      <main className="status-main">
        <div className="status-card">
          {/* Congratulation Section */}
          <div className="congratulation-section">
            <div className="congratulation-icon">🎉</div>
            <h1 className="congratulation-title">Congratulations!</h1>
            <p className="congratulation-subtitle">Your loan application has been approved</p>
          </div>

          {/* Divider */}
          <div className="section-divider"></div>

          {/* Loan Details Section */}
          <div className="loan-details-section">
            <h2 className="section-title">Loan Details</h2>
            
            <div className="detail-item">
              <span className="detail-label">Loan Amount Applied</span>
              <span className="detail-value">${appliedLoanAmount.toLocaleString()}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Loan Term</span>
              <span className="detail-value">{appliedLoanTerm} months</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Interest Rate</span>
              <span className="detail-value">{LOAN_RATE}% per annum</span>
            </div>

            <div className="detail-item highlight">
              <span className="detail-label">Balance Required</span>
              <span className="detail-value-highlight">${parseFloat(balanceRequired).toLocaleString()} (10%)</span>
            </div>
          </div>

          {/* Divider */}
          <div className="section-divider"></div>

          {/* Application Information */}
          <div className="application-info-section">
            <h2 className="section-title">Application Information</h2>
            
            <div className="info-item">
              <span className="info-label">Name</span>
              <span className="info-value">{firstName} {lastName}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">{phoneNumber}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{email}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Application ID</span>
              <span className="info-value">{applicationId}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="section-divider"></div>

          {/* Next Steps */}
          <div className="next-steps-section">
            <h2 className="section-title">Next Steps</h2>
            <p className="next-steps-text">
              Your loan application for ${appliedLoanAmount.toLocaleString()} has been approved. You will need a balance of ${balanceRequired} in your account for the funds to be disbursed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>

          {/* Information Box */}
          <div className="info-box">
            <p className="info-box-text">
              💡 Ensure you have a minimum balance of ${balanceRequired} in your account. Your loan will be processed once requirements are verified.
            </p>
          </div>
        </div>
      </main>

      <footer className="status-footer">
        <p>© 2026 NMB Holdings | Loan Approved</p>
      </footer>
    </div>
  );
}