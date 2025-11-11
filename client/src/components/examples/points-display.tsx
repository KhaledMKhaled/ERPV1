import { PointsDisplay } from '../points-display';

export default function PointsDisplayExample() {
  return (
    <div className="p-8 space-y-6 bg-background">
      <div>
        <h3 className="text-sm font-medium mb-3">Default Variant</h3>
        <PointsDisplay points={2450} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Large Variant</h3>
        <PointsDisplay points={2450} variant="large" />
      </div>
    </div>
  );
}
