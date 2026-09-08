window.BONSAI_REGISTRY = {
    "pine": {
        name: "Classic Pine Bonsai", waterRate: 4, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><circle cx="16" cy="28" r="2.5" fill="#a0522d"/><path d="M16,28 L16,24" stroke="#4ade80" stroke-width="2"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 Q18,22 15,18" fill="none" stroke="#5c4033" stroke-width="2.5"/><path d="M15,18 Q11,15 15,14 Q19,16 15,18" fill="#22c55e"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><path d="M16,28 L16,14" stroke="#5c4033" stroke-width="3"/><path d="M16,18 L22,15" stroke="#5c4033" stroke-width="2"/><path d="M16,14 L10,10" stroke="#5c4033" stroke-width="2"/><path d="M22,15 C25,12 20,10 22,15 Z" fill="#15803d"/><path d="M10,10 C7,8 12,6 10,10 Z" fill="#15803d"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 Q18,16 14,12" fill="none" stroke="#4a3728" stroke-width="4"/><path d="M14,12 Q8,12 16,4 Q24,12 14,12 Z" fill="#1b5e20"/><path d="M15,16 Q24,16 20,10" fill="none" stroke="#4a3728" stroke-width="3"/><path d="M20,10 Q14,8 22,4 Q28,10 20,10 Z" fill="#14532d"/></svg>`
        }
    },
    "sakura": {
        name: "Sakura Blossom", waterRate: 5, fertRate: 4,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><circle cx="16" cy="28" r="2.5" fill="#a0522d"/><path d="M16,28 L17,25" stroke="#f48fb1" stroke-width="2"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 Q15,22 17,19" fill="none" stroke="#5c4033" stroke-width="2.5"/><circle cx="17" cy="19" r="2.5" fill="#f48fb1"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><path d="M16,28 Q14,20 16,14" fill="none" stroke="#5c4033" stroke-width="3"/><circle cx="13" cy="16" r="3.5" fill="#f48fb1"/><circle cx="19" cy="12" r="4" fill="#f48fb1"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 Q20,18 14,12 T22,4" fill="none" stroke="#5c4033" stroke-width="3.5"/><circle cx="14" cy="12" r="6" fill="#f48fb1"/><circle cx="22" cy="4" r="7" fill="#ffb74d"/><ellipse cx="15" cy="6" rx="5" ry="4" fill="#ffccd5"/></svg>`
        }
    },
    "bamboo": {
        name: "Jade Bamboo", waterRate: 6, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="25" width="2" height="4" fill="#10b981"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="18" width="2" height="11" fill="#059669"/><rect x="14" y="18" width="4" height="1.5" fill="#3a2e2b"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="15" y="10" width="2" height="19" fill="#047857"/><rect x="13" y="20" width="6" height="2" fill="#1b4332"/><rect x="13" y="12" width="6" height="2" fill="#1b4332"/><path d="M17,12 Q23,9 21,6" fill="none" stroke="#059669" stroke-width="2"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="14" y="4" width="4" height="25" fill="#40916c" stroke="#3a2e2b" stroke-width="1.5"/><rect x="12" y="22" width="8" height="2" fill="#1b4332"/><rect x="12" y="14" width="8" height="2" fill="#1b4332"/><rect x="12" y="7" width="8" height="2" fill="#1b4332"/><path d="M18,14 Q26,10 24,5" fill="none" stroke="#40916c" stroke-width="2.5"/><path d="M14,7 Q6,5 8,2" fill="none" stroke="#40916c" stroke-width="2.5"/></svg>`
        }
    },
    "shroom": {
        name: "Canopy Shroom", waterRate: 5, fertRate: 5,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><ellipse cx="16" cy="27" rx="3" ry="1.5" fill="#e2e8f0"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="22" width="2" height="6" fill="#f8fafc"/><path d="M13,22 Q16,17 19,22 Z" fill="#ef4444"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="14" y="16" width="4" height="12" fill="#f8fafc" stroke="#3a2e2b"/><path d="M10,16 Q16,8 22,16 Z" fill="#ef4444" stroke="#3a2e2b"/><circle cx="16" cy="11" r="1.5" fill="#fff"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="12" y="12" width="8" height="16" fill="#f8fafc" stroke="#3a2e2b" stroke-width="2"/><path d="M4,12 Q16,-2 28,12 Z" fill="#ef4444" stroke="#3a2e2b" stroke-width="2.5"/><circle cx="10" cy="6" r="2" fill="#fff"/><circle cx="22" cy="7" r="2" fill="#fff"/><circle cx="16" cy="4" r="2.5" fill="#fff"/></svg>`
        }
    },
    "crystal": {
        name: "Prismatic Crystal", waterRate: 2, fertRate: 6,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><polygon points="16,26 18,29 14,29" fill="#cbd5e1"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><polygon points="16,29 20,20 12,20" fill="#38bdf8" stroke="#3a2e2b"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><polygon points="16,29 22,12 18,29 10,16" fill="#a855f7" stroke="#3a2e2b" stroke-width="2"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><polygon points="16,29 25,6 20,29 8,10 22,29 28,12" fill="#db2777" stroke="#3a2e2b" stroke-width="2.5"/><polygon points="16,29 14,2 18,29" fill="#6366f1"/></svg>`
        }
    }
};
