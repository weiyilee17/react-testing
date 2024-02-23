import type { SkillsProps } from './skills.types';
import { useEffect, useState } from 'react';

function Skills({ skills }: SkillsProps) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setLoggedIn(true);
    }, 1500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {loggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </>
  );
}

export default Skills;
