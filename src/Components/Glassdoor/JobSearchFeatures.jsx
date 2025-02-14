import React from 'react';

const styles = `
  .features-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (min-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .feature-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease;
  }

  .feature-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .feature-content {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .icon-container {
    background: #EBF5FF;
    border-radius: 50%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .icon {
    width: 24px;
    height: 24px;
    color: #2563EB;
  }

  .text-content {
    flex: 1;
  }

  .feature-title {
    font-size: 18px;
    font-weight: 500;
    color: #1F2937;
    margin: 0 0 8px 0;
  }

  .feature-description {
    font-size: 14px;
    line-height: 1.5;
    color: #6B7280;
    margin: 0;
  }

  .avatars-group {
    display: flex;
    margin-top: 16px;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid white;
    background: #E5E7EB;
    margin-right: -8px;
  }

  .interview-group {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }

  .target-icon {
    width: 24px;
    height: 24px;
    color: #2563EB;
  }
`;

const JobSearchFeatures = () => {
  const features = [
    {
      title: "Company Reviews and Ratings",
      description: "Written by current and former employees, and provide information about company culture, work-life balance, management, and other aspects of working for a specific company.",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5M9 14c-.2-1-.7-1.7-1.5-2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      )
    },
    {
      title: "Salary Reports",
      description: "Provide information about average salaries for various job titles and industries, as well as insights into benefits and other compensation-related information.",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    },
    {
      title: "Job Listings",
      description: "Sourced from various employers and job boards, and can be filtered by location, job type, and other criteria.",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      title: "Interview Questions and Reviews",
      description: "Allow job seekers to prepare for job interviews by viewing questions that have been asked in previous interviews at specific companies.",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-content">
                <div className="icon-container">
                  {feature.icon}
                </div>
                <div className="text-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
              {index === 0 && (
                <div className="avatars-group">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="avatar" />
                  ))}
                </div>
              )}
              {index === 3 && (
                <div className="interview-group">
                  <svg className="target-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobSearchFeatures;