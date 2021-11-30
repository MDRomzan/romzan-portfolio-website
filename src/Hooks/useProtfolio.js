import React, { useEffect, useState } from 'react';

const useProtfolio = () => {
    const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);


    return {projects,setProjects};
};

export default useProtfolio;