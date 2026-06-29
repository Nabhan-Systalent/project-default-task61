'use client';

import React from 'react';
import { MemberListProps } from './MemberList.types';

export const MemberList: React.FC<MemberListProps> = ({
  members,
  onRemoveMember,
  onUpdateRole,
  isLoading = false,
  error = null,
}) => {
  if (isLoading) {
    return <div className="p-4 text-center text-[var(--color-text-muted)]">Loading members...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-[var(--color-error)]">Error: {error}</div>;
  }

  if (!members || members.length === 0) {
    return <div className="p-4 text-center text-[var(--color-text-muted)]">No members found.</div>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-[var(--color-border)]">
      <table className="w-full text-left text-sm">
        <thead className="bg-[var(--color-surface-secondary)] text-[var(--color-text-muted)]">
          <tr>
            <th className="px-6 py-3 font-medium">Name</th>
            <th className="px-6 py-3 font-medium">Role</th>
            <th className="px-6 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)]">
          {members.map((member) => (
            <tr key={member.id}>
              <td className="px-6 py-4">
                <div className="font-medium text-[var(--color-text-primary)]">{member.name}</div>
                <div className="text-[var(--color-text-muted)]">{member.email}</div>
              </td>
              <td className="px-6 py-4">
                <select
                  value={member.role}
                  onChange={(e) => onUpdateRole(member.id, e.target.value as any)}
                  className="rounded border border-[var(--color-border)] bg-[var(--color-surface-primary)] px-2 py-1"
                >
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="text-[var(--color-error)] hover:underline"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
