
import React from 'react';

interface Stat {
  value: string;
  label: string;
}

const StatsSection = () => {
  const stats: Stat[] = [
    { value: "7+", label: "Years of Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "10+", label: "Professional Staff" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-16 bg-arch-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-arch-gold mb-2">{stat.value}</div>
              <div className="text-arch-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
