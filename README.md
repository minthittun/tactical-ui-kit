# Tactical UI

A React component library with cinematic tactical UI aesthetics. Inspired by command centers, operations dashboards, and mission control interfaces.

## Features

- **28 React Components** - Comprehensive UI toolkit
- **Pure CSS** - No CSS-in-JS dependencies
- **Dark Theme** - Command-center aesthetic
- **Tree-shakeable** - Import only what you need
- **Accessible** - Keyboard navigation support

## Installation

```bash
npm install tactical-ui-kit
```

## Recommended Fonts

This project uses the following fonts:

- **Bebas Neue** (for headings)
- **JetBrains Mono** (for code / UI text)

### Include Fonts

Add the following to your HTML `<head>`:

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## Quick Start

```

import { useState } from "react";
import {
Button,
DataTable,
StatusBadge,
Card,
Drawer,
Modal,
Toast,
Header,
Footer,
Nav,
NavItem,
NavSection,
NavDivider,
StatCard,
Input,
Select,
Textarea,
DatePicker,
Toggle,
Checkbox,
Pagination,
Tooltip,
Spinner,
Alert,
Badge,
ProgressBar,
Dropdown,
Avatar,
Skeleton,
EmptyState,
Tabs,
} from "tactical-ui-kit";
import "tactical-ui-kit/dist/tactical.css";

const sampleData = [
{ id: "P-1047", name: "Sarah Chen", rank: "Major", unit: "ALPHA-1", status: "active" },
{ id: "P-2234", name: "Marcus Webb", rank: "Captain", unit: "ALPHA-1", status: "active" },
{ id: "P-3156", name: "Elena Rodriguez", rank: "Lieutenant", unit: "ALPHA-2", status: "leave" },
{ id: "P-4089", name: "James Okafor", rank: "Sergeant", unit: "BRAVO-1", status: "active" },
{ id: "P-5123", name: "Yuki Tanaka", rank: "Corporal", unit: "BRAVO-2", status: "training" },
{ id: "P-6234", name: "David Kowalski", rank: "Major", unit: "BRAVO-1", status: "active" },
{ id: "P-7345", name: "Amara Diallo", rank: "Captain", unit: "CHARLIE-1", status: "active" },
{ id: "P-8456", name: "Viktor Petrov", rank: "Sergeant", unit: "CHARLIE-2", status: "leave" },
];

const columns = [
{ key: "id", label: "ID", width: "100px" },
{ key: "name", label: "Name", sortable: true },
{ key: "rank", label: "Rank", sortable: true },
{ key: "unit", label: "Unit", sortable: true },
{
key: "status",
label: "Status",
sortable: true,
render: (val) => <StatusBadge status={val} />,
},
];

const dropdownItems = [
{ label: "Edit Record", value: "edit" },
{ label: "Duplicate", value: "duplicate" },
{ divider: true },
{ label: "Delete", value: "delete", danger: true },
];

const tabsData = [
{
label: "Overview",
value: "overview",
content: <div style={{ color: "var(--text-secondary)" }}>Overview content displayed here</div>,
},
{
label: "Details",
value: "details",
content: <div style={{ color: "var(--text-secondary)" }}>Detailed information shown</div>,
},
{
label: "Settings",
value: "settings",
content: <div style={{ color: "var(--text-secondary)" }}>Configuration settings</div>,
},
];

function App() {
const [selectedPerson, setSelectedPerson] = useState(null);
const [drawerOpen, setDrawerOpen] = useState(false);
const [modalOpen, setModalOpen] = useState(false);
const [toast, setToast] = useState(null);
const [activeNav, setActiveNav] = useState("demo");
const [searchQuery, setSearchQuery] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const [toggleValue, setToggleValue] = useState(false);
const [checkboxValue, setCheckboxValue] = useState(false);
const [selectedDate, setSelectedDate] = useState(null);
const [inputValue, setInputValue] = useState("");
const [selectValue, setSelectValue] = useState("");

const handleRowClick = (row) => {
setSelectedPerson(row);
setDrawerOpen(true);
};

const handleSave = () => {
setToast("Record saved successfully");
setDrawerOpen(false);
setModalOpen(false);
};

const filteredData = sampleData.filter(
(person) =>
person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
person.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
person.unit.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
<Header brand="TACTICAL UI" classification="Classified" date="Sat, 25 Apr 2026" time="14:32:07" />

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Nav>
          <NavSection label="Demo">
            <NavItem active={activeNav === "demo"} onClick={() => setActiveNav("demo")}>
              Components
            </NavItem>
          </NavSection>
          <NavDivider />
          <NavSection label="Categories">
            <NavItem>Data Display</NavItem>
            <NavItem>Form Inputs</NavItem>
            <NavItem>Feedback</NavItem>
            <NavItem>Navigation</NavItem>
          </NavSection>
        </Nav>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div
            style={{
              height: "48px",
              background: "var(--bg-secondary)",
              borderBottom: "1px solid var(--border-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", letterSpacing: "2px" }}>
              COMPONENT SHOWCASE
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <Button variant="primary" size="sm" onClick={() => setModalOpen(true)}>
                Open Modal
              </Button>
              <Button size="sm" onClick={() => setToast("Action triggered!")}>
                Show Toast
              </Button>
            </div>
          </div>

          <div style={{ flex: 1, overflow: "auto", padding: "24px" }}>
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Alert
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
                <Alert type="success" title="Success" message="Operation completed successfully" />
                <Alert type="warning" title="Warning" message="Please review the changes" />
                <Alert type="danger" title="Error" message="Something went wrong" />
                <Alert type="info" title="Info" message="New update available" />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Button
              </h3>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <Button>Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button disabled>Disabled</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Badge
              </h3>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <StatusBadge status="active" />
                <StatusBadge status="leave" />
                <StatusBadge status="training" />
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
                <Badge>12</Badge>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Form Inputs
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                <Input label="Text Input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter text..." />
                <Select
                  label="Select"
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  options={[
                    { value: "opt1", label: "Option 1" },
                    { value: "opt2", label: "Option 2" },
                    { value: "opt3", label: "Option 3" },
                  ]}
                  placeholder="Select..."
                />
                <DatePicker label="Date Picker" value={selectedDate} onChange={setSelectedDate} />
              </div>
              <div style={{ marginTop: "16px" }}>
                <Textarea label="Textarea" placeholder="Enter description..." />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Toggle & Checkbox
              </h3>
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <Toggle checked={toggleValue} onChange={setToggleValue} label="Toggle Option" />
                <Checkbox checked={checkboxValue} onChange={setCheckboxValue} label="Checkbox Option" />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Progress Bar
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <ProgressBar value={75} showLabel label="Project Progress" />
                <ProgressBar value={45} variant="warning" showLabel label="Budget Usage" />
                <ProgressBar value={90} variant="danger" showLabel label="Storage" />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Tabs
              </h3>
              <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-primary)" }}>
                <Tabs tabs={tabsData} defaultTab="overview" />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Tooltip, Spinner & Avatar
              </h3>
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <Tooltip content="This is a tooltip" position="top">
                  <Button size="sm">Hover Me</Button>
                </Tooltip>
                <Spinner size="sm" />
                <Spinner />
                <Spinner size="lg" />
                <Avatar name="Sarah Chen" />
                <Avatar name="Marcus Webb" size="lg" />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Dropdown
              </h3>
              <Dropdown trigger={<Button>Actions</Button>} items={dropdownItems} onSelect={(item) => setToast(`${item.label} clicked`)} />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Card
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                <Card title="Card Header">
                  <p style={{ color: "var(--text-secondary)", fontSize: "12px" }}>
                    Card content goes here. This is a sample card component.
                  </p>
                </Card>
                <Card title="With Actions">
                  <p style={{ color: "var(--text-secondary)", fontSize: "12px", marginBottom: "12px" }}>
                    Card with footer actions.
                  </p>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <Button size="sm">Cancel</Button>
                    <Button size="sm" variant="primary">Confirm</Button>
                  </div>
                </Card>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Stat Card
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
                <StatCard label="Total Personnel" value={sampleData.length} variant="primary" />
                <StatCard label="Active" value={sampleData.filter((p) => p.status === "active").length} variant="success" />
                <StatCard label="On Leave" value={sampleData.filter((p) => p.status === "leave").length} variant="warning" />
                <StatCard label="Training" value={sampleData.filter((p) => p.status === "training").length} variant="info" />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Skeleton
              </h3>
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <Skeleton variant="circle" width="48px" height="48px" />
                <div style={{ flex: 1 }}>
                  <Skeleton variant="title" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="60%" />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Empty State
              </h3>
              <div style={{ border: "1px solid var(--border-primary)", background: "var(--bg-secondary)", padding: "32px", textAlign: "center" }}>
                <EmptyState icon="info" title="No Data Available" description="There is currently no data to display. Please check back later." />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Data Table
              </h3>
              <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
                <Input placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <DataTable columns={columns} data={filteredData} onRowClick={handleRowClick} selectedId={selectedPerson?.id} />
              </div>
              <Pagination current={currentPage} total={filteredData.length} onChange={setCurrentPage} pageSize={5} />
            </div>
          </div>
        </div>
      </div>

      <Footer status="System Online" count={`${sampleData.length} Components`}>
        <span className="hrms-kbd">
          <span className="hrms-kbd-key">Ctrl</span>+
          <span className="hrms-kbd-key">S</span> Save
        </span>
        <span className="hrms-kbd">
          <span className="hrms-kbd-key">Esc</span> Close
        </span>
      </Footer>

      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Personnel Detail"
        footer={
          <div style={{ display: "flex", gap: "8px" }}>
            <Button onClick={() => setDrawerOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleSave}>Save</Button>
          </div>
        }
      >
        {selectedPerson && (
          <div>
            <Card title="Identity" style={{ marginBottom: "16px" }}>
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: "24px", fontWeight: "700", color: "var(--accent-cyan)" }}>
                  {selectedPerson.id}
                </div>
                <div style={{ fontSize: "18px", fontWeight: "600", marginTop: "8px" }}>
                  {selectedPerson.name}
                </div>
                <div style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {selectedPerson.rank}
                </div>
              </div>
            </Card>
            <Card title="Status">
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", alignItems: "center" }}>
                <span className="hrms-form-label">Current State</span>
                <StatusBadge status={selectedPerson.status} />
              </div>
            </Card>
          </div>
        )}
      </Drawer>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm Action"
        size="sm"
        footer={
          <>
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleSave}>Confirm</Button>
          </>
        }
      >
        <p style={{ color: "var(--text-secondary)", fontSize: "13px" }}>
          Are you sure you want to proceed with this action? This operation cannot be undone.
        </p>
      </Modal>

      <Toast message={toast} type="success" onClose={() => setToast(null)} />
    </div>

);
}

export default App;

```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires React 18+.

---

## License

MIT

```

```
