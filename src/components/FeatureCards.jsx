 const FeatureCards = () => (
  <div className="grid grid-cols-2 gap-4 p-10">
    <div className="bg-red-100 p-6 rounded">
      <h3 className="text-xl font-bold">For Employers</h3>
      <p>Find professionals across all skills.</p>
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Post jobs for Free</button>
    </div>
    <div className="bg-pink-100 p-6 rounded">
      <h3 className="text-xl font-bold">For Candidate</h3>
      <p>Build your profile and find jobs.</p>
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Upload your CV</button>
    </div>
  </div>
);

export default FeatureCards;
