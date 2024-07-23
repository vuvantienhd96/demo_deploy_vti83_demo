import './style.css';
import { useSelector } from 'react-redux';
export const Feature = () => {
  const name = useSelector((state) => state.counter.name);

  return (
    <div>
      <section className="header-feature">
        <>
          <h1 className="title">Reliable, efficient delivery: {name}</h1>
          <p className="des">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </>
      </section>

      <main className="card_grid">
        <section className="card cyan">
          <h2 className="card_title">Supervisor</h2>
          <p className="card_content">
            Monitors activity to identify project roadblocks
          </p>
          <img
            className="card_img"
            src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-supervisor.svg"
            alt="Supervisor"
          />
        </section>

        <section className="card red">
          <h2 className="card_title">Team Builder</h2>
          <p className="card_content">
            Scans our talent network to create the optimal team for your project
          </p>
          <img
            className="card_img"
            src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg"
            alt="page-home"
          />
        </section>

        <section className="card blue">
          <h2 className="card_title">Karma</h2>
          <p className="card-content">
            Regularly evaluates our talent to ensure quality
          </p>
          <img
            className="card_img"
            src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-karma.svg"
            alt="Karma"
          />
        </section>

        <section className="card orange">
          <h2 className="card_title">Calculator</h2>
          <p className="card_content">
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            className="card_img"
            src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-calculator.svg"
            alt="Calculator"
          />
        </section>
      </main>
    </div>
  );
};
