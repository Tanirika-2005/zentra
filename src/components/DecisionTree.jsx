import React, { useState, useEffect } from 'react';
import './DecisionTree.css';

const DecisionTree = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [simulatedNode, setSimulatedNode] = useState(null);

  // Auto-simulation effect: visually 'compute' random paths when idle
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredNode) {
        const evaluativeNodes = ['values', 'culture', 'peers', 'family', 'brand', 'status', 'price', 'trust', 'feature', 'risk'];
        const randomNode = evaluativeNodes[Math.floor(Math.random() * evaluativeNodes.length)];
        setSimulatedNode(randomNode);
      }
    }, 2500); // Compute a new path every 2.5 seconds
    
    return () => clearInterval(interval);
  }, [hoveredNode]);

  // Expanded coordinates for better spacing (1000x700 viewBox)
  const nodes = [
    { id: 'root', x: 150, y: 350, label: 'HUMAN DECISION' },
    
    { id: 'values', x: 500, y: 150, label: 'VALUES' },
    { id: 'culture', x: 500, y: 280, label: 'CULTURE' },
    { id: 'peers', x: 500, y: 410, label: 'PEERS' },
    { id: 'family', x: 500, y: 540, label: 'FAMILY' },
    
    { id: 'brand', x: 850, y: 80, label: 'BRAND' },
    { id: 'status', x: 850, y: 180, label: 'STATUS' },
    { id: 'price', x: 850, y: 280, label: 'PRICE' },
    { id: 'trust', x: 850, y: 380, label: 'TRUST' },
    { id: 'feature', x: 850, y: 480, label: 'FEATURE' },
    { id: 'risk', x: 850, y: 580, label: 'RISK' },
  ];

  const edges = [
    { source: 'root', target: 'values' },
    { source: 'root', target: 'culture' },
    { source: 'root', target: 'peers' },
    { source: 'root', target: 'family' },
    
    { source: 'values', target: 'brand' },
    { source: 'values', target: 'feature' },
    
    { source: 'culture', target: 'status' },
    { source: 'culture', target: 'brand' },
    { source: 'culture', target: 'risk' },
    
    { source: 'peers', target: 'price' },
    { source: 'peers', target: 'trust' },
    { source: 'peers', target: 'status' },
    
    { source: 'family', target: 'feature' },
    { source: 'family', target: 'risk' },
    { source: 'family', target: 'price' },
  ];

  const nodeTooltips = {
    root: "Replicating the intricate cognitive pathways of human deliberation and buyer psychology.",
    values: "Core personal values dictate baseline brand affinity before external social factors are applied.",
    culture: "Deep-rooted cultural narratives often override individual preferences when evaluating premium offerings.",
    peers: "Social deliberation significantly amplifies validation-seeking and financial anxiety.",
    family: "Household consensus dictates utility requirements and acts as a strict veto on discretionary spending.",
    brand: "High brand recall significantly lowers the barrier for premium pricing acceptance.",
    status: "Status signaling is a primary driver in peer-heavy environments.",
    price: "Price sensitivity is dynamic and scales inversely with peer validation.",
    trust: "Trust metrics are heavily weighted by word-of-mouth and localized community sentiment.",
    feature: "Feature evaluation is strictly gated by household utility requirements.",
    risk: "Risk aversion spikes exponentially without family or peer validation."
  };

  const getCoord = (id) => nodes.find(n => n.id === id);

  const activeFocusNode = hoveredNode || simulatedNode;

  const isEdgeActive = (edge) => {
    if (!activeFocusNode) return false;
    if (activeFocusNode === 'root') return true;
    if (edge.source === activeFocusNode || edge.target === activeFocusNode) return true;
    
    if (edge.source === 'root') {
      const parentNode = edge.target;
      const connectsToHovered = edges.some(e => e.source === parentNode && e.target === activeFocusNode);
      if (connectsToHovered) return true;
    }
    
    return false;
  };

  return (
    <div className="dt-container" onMouseLeave={() => setHoveredNode(null)}>
      
      <div className="dt-caption fade-in delay-300">
        <span className="dt-caption-badge">
          <span className="live-dot"></span> LIVE MAP
        </span>
        Human Decision Making Process
      </div>

      <svg viewBox="0 0 1000 700" className="dt-svg" preserveAspectRatio="none">
        {/* Draw edges */}
        {edges.map((edge, i) => {
          const s = getCoord(edge.source);
          const t = getCoord(edge.target);
          // Smoother, sweeping bezier curves
          const d = `M ${s.x} ${s.y} C ${(s.x + t.x) / 2} ${s.y}, ${(s.x + t.x) / 2} ${t.y}, ${t.x} ${t.y}`;
          const active = isEdgeActive(edge);
          
          return (
            <g key={`edge-${i}`}>
              <path 
                d={d} 
                className={`dt-path ${active ? 'active' : ''}`} 
              />
              <path 
                d={d} 
                className={`dt-path-glow ${active ? 'active' : ''}`} 
              />
              {/* Very faint, fast moving data points */}
              <circle r="1.5" fill="rgba(0, 0, 0, 0.2)" className="dt-data-packet">
                <animateMotion dur={`${1.5 + Math.random() * 1.5}s`} repeatCount="indefinite" path={d} />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Render HTML Pills */}
      {nodes.map(node => {
        const isActive = activeFocusNode === node.id || activeFocusNode === 'root';
        const leftPercent = (node.x / 1000) * 100;
        const topPercent = (node.y / 700) * 100;

        return (
          <div
            key={node.id}
            className={`dt-pill ${isActive ? 'active' : ''}`}
            style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
            onMouseEnter={() => setHoveredNode(node.id)}
          >
            {node.label}
          </div>
        );
      })}

      {/* Tooltip display */}
      {hoveredNode && nodeTooltips[hoveredNode] && (
        <div className="dt-tooltip fade-in">
          <div className="dt-tooltip-icon">✦</div>
          <p>{nodeTooltips[hoveredNode]}</p>
        </div>
      )}
    </div>
  );
};

export default DecisionTree;
