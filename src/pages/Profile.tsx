import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Calendar,
  Dumbbell,
  Loader2,
  RefreshCcw,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "../components/layout/ui/Button";
import { Card } from "../components/layout/ui/Card";
import { PlanDisplay } from "../components/layout/plan/PlanDisplay";
import { useState } from "react";

export default function Profile() {
  const { user, isLoading, plan, generatePlan } = useAuth();
  const [isGenerating, setIsGenerating] = useState(false);
  if (!user && !isLoading) {
    return <Navigate to="/auth/sign-in" replace />;
  }
  if (!plan) {
    return <Navigate to="/onboarding" replace />;
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const handleRegeneratePlan = async () => {
    try {
      setIsGenerating(true);

      await generatePlan();
    } catch (err) {
      console.log(err);
    } finally {
      setIsGenerating(false);
    }
  };

  console.log(isGenerating);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      {!isGenerating ? (
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">Your Training Plan</h1>
              <p className="text-[var(--color-muted)]">
                Version {plan.version} • Created {formatDate(plan.createdAt)}
              </p>
            </div>

            <Button
              variant="secondary"
              className="gap-2"
              onClick={() => handleRegeneratePlan()}
            >
              <RefreshCcw className="w-4 h-4" />
              Regenerate Plan
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card variant="bordered" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Target className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)]">Goal</p>
                <p className="font-medium text-sm">{plan.overview.goal}</p>
              </div>
            </Card>
            <Card variant="bordered" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)]">Frequency</p>
                <p className="font-medium text-sm">{plan.overview.frequency}</p>
              </div>
            </Card>
            <Card variant="bordered" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)]">Split</p>
                <p className="font-medium text-sm">{plan.overview.split}</p>
              </div>
            </Card>
            <Card variant="bordered" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)]">Version</p>
                <p className="font-medium text-sm">{plan.version}</p>
              </div>
            </Card>
          </div>

          {/* Plan notes */}
          <Card variant="bordered" className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Program Notes</h2>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              {plan.overview.notes}
            </p>
          </Card>

          {/* Weekly Schedule */}
          <h2 className="font-semibold text-xl mb-4">Weekly Schedule</h2>
          <PlanDisplay weeklySchedule={plan.weeklySchedule} />

          <Card variant="bordered" className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Progression Strategy</h2>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              {plan.progression}
            </p>
          </Card>
        </div>
      ) : (
        <Card variant="bordered" className="text-center py-16">
          <Loader2 className="w-12 h-12 text-accent mx-auto mb-6 animate-spin" />
          <h1 className="text-2xl font-bold mb-2">Regenerating your Plan</h1>
          <p className="text-muted">
            Our AI is building your personalized training program...
          </p>
        </Card>
      )}
    </div>
  );
}
