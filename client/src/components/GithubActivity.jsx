import "./GithubActivity.css";

export default function GithubActivity() {
  const username = "Mayur-Rithe-14";

  return (
    <section id="github" className="github-section">
      <div className="github-container">
        <div className="github-header">
          <p className="section-tag">MY CODING JOURNEY</p>

          <h2>GitHub Activity</h2>

          <p className="github-description">
            A snapshot of my GitHub journey showcasing contributions, coding
            consistency, and the technologies I work with.
          </p>
        </div>

        <div className="github-stats-card">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=Mayur-Rithe-14&show_icons=true&theme=tokyonight&hide_border=true`}
            alt="GitHub Stats"
          />
        </div>

        <div className="github-grid">
          <div className="github-card">
            <img
              src={`https://streak-stats.demolab.com?user=Mayur-Rithe-14&theme=tokyonight&hide_border=true`}
              alt="GitHub Streak"
            />
          </div>

          <div className="github-card">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Mayur-Rithe-14&layout=compact&theme=tokyonight&hide_border=true`}
              alt="Top Languages"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
