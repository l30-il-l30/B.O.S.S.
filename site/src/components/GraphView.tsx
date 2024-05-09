import React, { useEffect, useState } from 'react';
import Graph from "react-vis-network-graph";

interface Config {
  drag?: boolean;
  zoom?: boolean;
  stabilization?: boolean;
  bg?: string;
  color?: string;
}

const GraphView: React.FC<Config> = ({ drag = false, zoom = false, stabilization = false, bg = "white", color = "red" }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
  const [graph, setGraph] = useState({
    nodes: [
      { id: 1, label: "A" },
      { id: 2, label: "B" },
      { id: 3, label: "C" },
      { id: 4, label: "D" },
      { id: 5, label: "E" },
      { id: 6, label: "F" },
      { id: 7, label: "G" },
      { id: 8, label: "H" },
      { id: 9, label: "I" },
      { id: 10, label: "J" },
    ],
    edges:[
      { from: 1, to: 2, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 1, to: 3, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 2, to: 4, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 2, to: 6, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 3, to: 8, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 4, to: 9, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 6, to: 1, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 5, to: 6, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 8, to: 7, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 8, to: 5, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 9, to: 3, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 10, to: 5, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 10, to: 11, arrows: { from: { enable: true }, to: { enable: false } } },
      { from: 10, to: 12, arrows: { from: { enable: true }, to: { enable: false } } },
    ]
  });

  useEffect(() => {
    const handleResize = () => {
      setGraph(prevGraph => {
        const nodeSize = Math.min(50, window.innerWidth / 20);
        const uniqueNodes = prevGraph.nodes.filter((node, index, self) => 
          index === self.findIndex(n => n.id === node.id)
        );

        const updatedEdges = prevGraph.edges.filter(edge =>
          uniqueNodes.find(node => node.id === edge.from) && 
          uniqueNodes.find(node => node.id === edge.to)
        );

        return { nodes: uniqueNodes, edges: updatedEdges };
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const options = {
    nodes: {
      size: 40,
      color: {
        border: "transparent",
        background: bg,
      },
    },
    layout: {
      hierarchical: false,
    },
    edges: {
      color,
    },
    interaction: {
      dragView: drag,
      dragNodes: drag,
      zoomView: zoom,
    },
    physics: {
      stabilization,
    },
  };

  const events = {
    select: function(event: any) {
      const { nodes } = event;
      setSelectedNodeId(nodes.length ? nodes[0] : null);
    }
  };

  return (
    <div className='overflow-x-hidden w-full h-full'>
      <Graph 
        graph={graph}
        options={options}
        events={events}
        getNetwork={(net: any) => {}}
      />
    </div>
  );
};

export default GraphView;
