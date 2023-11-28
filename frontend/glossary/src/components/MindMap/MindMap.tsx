import { useCallback, useEffect } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
} from 'reactflow';
import "reactflow/dist/style.css";
import { Container } from "../../styled/styled";
import { useQuery } from 'react-query';

const fetchMindmapData = async () => (await fetch('/mindmap')).json();

export const MindMap = () => {
  const { data: mindmapData, isLoading, isError } = useQuery('mindmap', fetchMindmapData);
  
  const [nodes, setNodes, onNodesChange] = useNodesState(mindmapData?.initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(mindmapData?.initialEdges);


  const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
      );
      
  useEffect(()=>{
        if(mindmapData) {
          setNodes(mindmapData?.initialNodes)
          setEdges(mindmapData?.initialEdges)
        }
      },[mindmapData, setEdges, setNodes])

  if (isLoading) {
    return <div>Loading mindmap...</div>;
  }

  if (isError) {
    return <div>Error fetching mindmap data</div>;
  }

  return (
    <Container>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="top-right"
      >
        <MiniMap nodeBorderRadius={2} />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </Container>
  );
};
