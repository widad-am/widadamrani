'use client';

import { FiCheck } from 'react-icons/fi';
import MacWindow from '@/components/ui/MacWindow';
import { expertiseGroups, extraSkills } from '@/data/skills';

export default function ToolsPopup({ isOpen, onClose }) {
  return (
    <MacWindow isOpen={isOpen} onClose={onClose} title="Tools & Skills" maxWidth="max-w-4xl">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Technologies I use to ship production-ready products.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {expertiseGroups.map((group) => (
          <div key={group.title} className="mac-tools-group">
            <h3 className="mac-tools-group-title">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="mac-tools-pill">
                  <FiCheck className="mac-tools-check" strokeWidth={3} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mac-tools-group">
        <h3 className="mac-tools-group-title">Additional Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {extraSkills.map((skill) => (
            <span key={skill} className="workspace-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </MacWindow>
  );
}
