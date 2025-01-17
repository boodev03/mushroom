import { motion } from 'framer-motion';

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      status: "completed",
      items: ["Launch Token", "Community Building", "Game Development Start"]
    },
    {
      phase: "Phase 2",
      status: "in-progress",
      items: ["Game Beta Release", "NFT Collection", "Exchange Listings"]
    },
    {
      phase: "Phase 3",
      status: "upcoming",
      items: ["Full Game Launch", "DAO Governance", "Ecosystem Expansion"]
    }
  ];

  return (
    <div className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-pixel text-center mb-16 text-gray-800">Roadmap</h2>
        
        <div className="max-w-3xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 pl-8 border-l-4 border-red-500"
            >
              <div className={`absolute -left-3 w-6 h-6 rounded-full ${
                phase.status === 'completed' ? 'bg-red-500' :
                phase.status === 'in-progress' ? 'bg-yellow-500' :
                'bg-gray-300'
              }`}>
                {phase.status === 'completed' && (
                  <div className="w-4 h-4 absolute inset-1 bg-white rounded-full" />
                )}
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg ml-4">
                <h3 className="text-xl font-pixel mb-4 text-red-500 flex items-center gap-2">
                  {phase.phase}
                  <span className={`text-xs px-2 py-1 rounded ${
                    phase.status === 'completed' ? 'bg-green-100 text-green-700' :
                    phase.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {phase.status === 'completed' ? 'Completed' :
                     phase.status === 'in-progress' ? 'In Progress' :
                     'Upcoming'}
                  </span>
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}