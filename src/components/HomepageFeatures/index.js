import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Systems and Services',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        The first generation HPC in BNU-HKBU United International College - Bayes Cluster is built in 2018.
      </>
    ),
  },
  {
    title: 'Technical Support',
    Svg: require('@site/static/img/technical-support.svg').default,
    description: (
      <>
        Supporting over 100 faculty, researchers and students for their research usage. 
        We also provides seminar and tutorial for the user to know more about the cluster and parallel computing.
      </>
    ),
  },
  {
    title: 'Research and Development',
    Svg: require('@site/static/img/researcher.svg').default,
    description: (
      <>
        Research and development includes CI/CD systems, computational statistics, machine learning and etc..
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
